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
  currentFrame = 0;
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
    )
  };

  static defaultProps = {
    imageMap: []
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

  updateFrame = frame => {
    const { actions } = this.props;
    this.currentFrame = this.currentFrame + 1;
    if (actions) {
      const action = findAction(actions, this.currentFrame);
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
    const { animationData, imageMap } = this.props;

    const defaultOptions = {
      loop: false,
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
