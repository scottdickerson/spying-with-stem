import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import Sound from "react-sound";
import { ANIMATION_ACTIONS } from "../../constants/constants";
import { updateImagePaths } from "./lottieUtils";
import "animate.css/animate.min.css";
import styles from "./LottieControl.module.css";
import delay from "lodash/delay";

const promptID = "animationPausePrompt";
export default class LottieControl extends React.Component {
  state = {
    isPaused: true,
    isStopped: true,
    currentFrame: 0,
    isPromptShowing: false
  };
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
    /** Callback called when the loop completes */
    onComplete: PropTypes.func,
    isDebug: PropTypes.bool,
    promptDelay: PropTypes.number,
    lazyLoadAnimations: PropTypes.bool
  };

  static defaultProps = {
    imageMap: [],
    isLooping: false,
    autoplay: false,
    isDebug: false,
    lazyLoadAnimations: false
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
    delay(this.resume, 500); // wait for the enter animation to finish
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
    clearTimeout(this.promptTimeout);
    const { onComplete } = this.props;
    if (this.state.isPaused || this.state.isStopped) {
      this.setState({
        isPaused: false,
        isStopped: false,
        isPromptShowing: false
      });
    }
    if (this.state.isComplete && !this.triggeredComplete) {
      this.triggeredComplete = true;
      this.setState({ isPromptShowing: false, isPaused: false });
      onComplete && onComplete();
    }
  };

  findAction = (actions, frame) => {
    const { isDebug } = this.props;
    // Need to handle frameskip in case the frame number doesn't match exactly
    const matchingAction = actions.find(
      action =>
        action.frame <= frame &&
        action.action !== ANIMATION_ACTIONS.PLAY_SOUND && // sounds are tracked separately
        !this.actionMap[action.frame]
    );

    if (matchingAction) {
      if (isDebug) {
        console.log(
          `currentFrame: ${frame} matchingAction: ${JSON.stringify(
            matchingAction
          )}`
        );
      }
      // keep track that we've run it
      this.actionMap[matchingAction.frame] = true;
      return matchingAction;
    }
    return false;
  };

  showPrompt = () => {
    const { promptDelay } = this.props;
    if (promptDelay) {
      this.promptTimeout = setTimeout(
        () => this.setState({ isPromptShowing: true }),
        promptDelay
      );
    }
  };
  /* Unfortunately I seem to get called back multiple times for the same frame for big animations */
  updateFrame = frame => {
    const { actions, onNextAction, isDebug } = this.props;

    if (isDebug) {
      console.log(`update Frame current Frame: ${frame.currentTime}`);
    }
    const currentFrame = Math.floor(frame.currentTime);
    if (actions && this.previousFrame < currentFrame) {
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
            this.showPrompt();
            break;
          default: {
            break;
          }
        }
      }
    }
  };

  handleComplete = () => {
    const { isComplete } = this.state;
    // Unfortunately this is called multiple times by lottie
    if (!isComplete) {
      this.setState({ isComplete: true });
      this.showPrompt();
    }
  };

  // I don't know why, but it seems I have to keep track to keep sounds from replaying
  finishedSound = soundId => {
    this.soundMap[soundId] = true;
  };
  hasSoundPlayed = soundId => this.soundMap[soundId];

  render() {
    const {
      animationData,
      imageMap,
      isLooping,
      actions,
      isDebug,
      lazyLoadAnimations
    } = this.props;
    const { isPaused, currentFrame, isPromptShowing, isStopped } = this.state;

    const defaultOptions = {
      loop: isLooping,
      autoplay: false,
      animationData: updateImagePaths(animationData, imageMap),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        progressiveLoad: lazyLoadAnimations
      }
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          isPaused={isPaused}
          isStopped={isStopped}
          autoLoad
          isClickToPauseDisabled={true}
          isSubframe={false}
          eventListeners={[
            {
              eventName: "enterFrame",
              callback: this.updateFrame
            },
            {
              eventName: "complete",
              callback: this.handleComplete
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
