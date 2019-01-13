import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import Sound from "react-sound";
import { ANIMATION_ACTIONS } from "../../constants/constants";
import { updateImagePaths } from "./lottieUtils";
import "animate.css/animate.min.css";
import styles from "./LottieControl.module.css";

const promptID = "animationPausePrompt";
export default class LottieControl extends React.Component {
  state = { isPaused: false, currentFrame: 0, isPromptShowing: false };
  soundMap = {};
  actionMap = {};
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
    onNextAction: PropTypes.func,
    isDebug: PropTypes.bool,
    promptDelay: PropTypes.number
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
    if (!document.getElementById(promptID)) {
      this.portalDiv = document.createElement("div");
      this.portalDiv.setAttribute("id", promptID);
      this.portalDiv.setAttribute(
        "class",
        `${styles.overlay} animated pulse infinite`
      );
      document.body.appendChild(this.portalDiv);
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener("touchstart", this.touchListener);
    document.body.removeEventListener("click", this.clickListener);
    clearTimeout(this.promptTimeout);
    if (this.portalDiv) {
      document.body.removeChild(this.portalDiv);
    }
  }

  resume = () => {
    if (this.state.isPaused) {
      this.setState({ isPaused: false, isPromptShowing: false });
      clearTimeout(this.promptTimeout);
    }
  };

  findAction = (actions, frame) => {
    // Need to handle frameskip in case the frame number doesn't match exactly
    const matchingAction = actions.find(
      action =>
        action.frame <= frame &&
        action.action !== ANIMATION_ACTIONS.PLAY_SOUND && // sounds are tracked separately
        !this.actionMap[action.frame]
    );

    if (matchingAction) {
      console.log(`matchingAction: ${JSON.stringify(matchingAction)}`);
      // keep track that we've run it
      this.actionMap[matchingAction.frame] = true;
      return matchingAction;
    }
    return false;
  };

  /* Unfortunately I seem to get called back multiple times for the same frame for big animations */
  updateFrame = frame => {
    const { actions, onNextAction, promptDelay } = this.props;

    const currentFrame = Math.floor(frame.currentTime);
    if (actions && this.previousFrame <= currentFrame) {
      this.previousFrame = currentFrame;

      this.setState({ currentFrame: currentFrame });
      const action = this.findAction(actions, currentFrame);
      if (action) {
        // found an action for this frame
        if (onNextAction) {
          onNextAction(action);
        }
        switch (action.action) {
          case ANIMATION_ACTIONS.PAUSE:
            this.setState({ isPaused: true, currentFrame: currentFrame });
            if (promptDelay) {
              this.promptTimeout = setTimeout(
                () => this.setState({ isPromptShowing: true }),
                promptDelay
              );
            }
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
    const { isPaused, currentFrame, isPromptShowing } = this.state;

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
          <h3 className={styles.frameCounter}>Current Frame: {currentFrame}</h3>
        ) : null}
        {isPromptShowing && this.portalDiv
          ? ReactDOM.createPortal(
              <h3 className={styles.prompt}>Touch to continue</h3>,
              this.portalDiv
            )
          : null}
      </div>
    );
  }
}
