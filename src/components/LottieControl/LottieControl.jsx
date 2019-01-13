import React from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import Sound from "react-sound";
import { ANIMATION_ACTIONS } from "../../constants/constants";
import { updateImagePaths } from "./lottieUtils";

const findAction = (actions, frame) => {
  return actions.find(action => action.frame === frame);
};
export default class LottieControl extends React.Component {
  state = { isPaused: false, currentFrame: 0 };
  soundMap = {};
  previousFrame = 0;
  static propTypes = {
    animationData: PropTypes.object.isRequired,
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        frame: PropTypes.number,
        action: PropTypes.oneOf(Object.values(ANIMATION_ACTIONS)),
        payload: PropTypes.string // extra information about the action
      })
    ),
    imageMap: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, path: PropTypes.string })
    ),
    isLooping: PropTypes.bool,
    onFrameUpdate: PropTypes.func,
    isDebug: PropTypes.bool
  };

  static defaultProps = {
    imageMap: [],
    isLooping: false,
    isDebug: false
  };

  componentDidMount() {
    this.touchListener = document.body.addEventListener(
      "touchstart",
      this.resume
    );
    this.clickListener = document.body.addEventListener("click", this.resume);
  }

  componentWillUmount() {
    document.body.removeEventListener(this.touchListener);
    document.body.removeEventListener(this.clickListener);
  }

  resume = () => {
    if (this.state.isPaused) {
      this.setState({ isPaused: false });
    }
  };

  /* Unfortunately I seem to get called back multiple times for the same frame for big animations */
  updateFrame = frame => {
    const { actions, onFrameUpdate } = this.props;

    const currentFrame = Math.floor(frame.currentTime);
    if (actions && this.previousFrame !== currentFrame) {
      this.previousFrame = currentFrame;
      if (onFrameUpdate) {
        onFrameUpdate(currentFrame);
      }
      this.setState({ currentFrame: currentFrame });
      const action = findAction(actions, currentFrame);
      if (action) {
        // found an action for this frame
        switch (action.action) {
          case ANIMATION_ACTIONS.PAUSE:
            this.setState({ isPaused: true, currentFrame: currentFrame });
            break;
          default: {
            break;
          }
        }
      }
    }
  };

  // I don't know why, but it seems I have to keep track to keep sounds from replaying
  finishedSound = soundId => {
    this.soundMap[soundId] = true;
  };
  hasSoundPlayed = soundId => this.soundMap[soundId];

  render() {
    const { animationData, imageMap, isLooping, actions, isDebug } = this.props;
    const { isPaused, currentFrame } = this.state;

    const defaultOptions = {
      loop: isLooping,
      autoplay: true,
      animationData: updateImagePaths(animationData, imageMap),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          isPaused={isPaused}
          autoLoad
          isClickToPauseDisabled={true}
          isSubframe={false}
          eventListeners={[
            {
              eventName: "enterFrame",
              callback: this.updateFrame
            }
          ]}
        />
        {actions &&
          actions // are there any sound files that match the current frame?
            .filter(action => action.action === ANIMATION_ACTIONS.PLAY_SOUND)
            .map(action => {
              const uniqueSoundId = `${action.soundFile}-${action.frame}`;
              return (
                <Sound
                  url={action.soundFile}
                  playStatus={
                    action.frame <= currentFrame &&
                    !this.hasSoundPlayed(uniqueSoundId)
                      ? Sound.status.PLAYING
                      : Sound.status.PAUSED
                  }
                  onFinishedPlaying={() => this.finishedSound(uniqueSoundId)}
                  key={uniqueSoundId}
                />
              );
            })}
        {isDebug ? (
          <h3
            style={{
              color: "white",
              position: "absolute",
              top: "0px",
              right: "0px",
              left: "0px",
              bottom: "0px",
              margin: "auto",
              width: "200px",
              height: "100px"
            }}
          >
            Current Frame: {currentFrame}
          </h3>
        ) : null}
      </div>
    );
  }
}
