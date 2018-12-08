import React from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import { ANIMATION_ACTIONS } from "../../constants/constants";
import { updateImagePaths } from "./lottieUtils";

const findAction = (actions, frame) => {
  return actions.find(action => action.frame === frame);
};
export default class LottieControl extends React.Component {
  state = { isStopped: false, isPaused: false };
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
    isLooping: PropTypes.bool
  };

  static defaultProps = {
    imageMap: [],
    isLooping: false
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
    const { actions } = this.props;
    console.log(
      `frame callback ${JSON.stringify(frame)} and previousFrame ${
        this.previousFrame
      }`
    );
    const currentFrame = Math.floor(frame.currentTime);
    if (actions && this.previousFrame !== currentFrame) {
      this.previousFrame = currentFrame;
      const action = findAction(actions, currentFrame);
      if (action) {
        // found an action for this frame
        switch (action.action) {
          case ANIMATION_ACTIONS.PAUSE:
            this.setState({ isPaused: true });
            break;
          default: {
            console.error(`unknown action: ${action}`);
            break;
          }
        }
      }
    }
  };

  render() {
    const { animationData, imageMap, isLooping } = this.props;

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
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          isClickToPauseDisabled={true}
          isSubframe={false}
          eventListeners={[
            {
              eventName: "enterFrame",
              callback: this.updateFrame
            }
          ]}
        />
      </div>
    );
  }
}
