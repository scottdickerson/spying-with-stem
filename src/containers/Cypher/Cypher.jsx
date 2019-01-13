import React from "react";
import PropTypes from "prop-types";

import SiteDetails from "../../components/SiteDetails/SiteDetails";
import Details from "../../components/Details/Details";
import { ANIMATION_ACTIONS } from "../../constants/constants";

import animationData from "./animation/Cypher_Main/Cypher_Main.json";
import animationRight from "./animation/Cypher_Right/Cypher_Right.json";
import actions from "./animation/Cypher_Main/Cypher_Main_Actions";
import LottieControl from "../../components/LottieControl/LottieControl";
import Artboard1 from "./animation/Cypher_Main/images/Artboard_1.png";
import broken from "./animation/Cypher_Main/images/broken.png";
import UDOTC from "./animation/Cypher_Main/images/United_Daughters_of_the_Confederacy-BW.jpg";

const propTypes = {
  isOpen: PropTypes.bool,
  onCloseSite: PropTypes.func.isRequired
};

class Cypher extends React.Component {
  state = {
    title: "Cyphers",
    details:
      "Cyphers are one of the oldest methods of encryption. Each letter of the alphabet is replaced by a symbol. "
  };
  handleFrameUpdate = frame => {
    const matchingAction = actions.find(action => action.frame === frame);
    if (
      matchingAction &&
      (matchingAction.action === ANIMATION_ACTIONS.UPDATE_TEXT ||
        matchingAction.action === ANIMATION_ACTIONS.PAUSE)
    ) {
      this.setState({
        ...matchingAction,
        subTitle: matchingAction.subTitle || null
      });
    }
  };
  render() {
    const { isOpen, onCloseSite } = this.props;
    return (
      <SiteDetails
        isOpen={isOpen}
        onCloseSite={onCloseSite}
        leftPane={
          <LottieControl
            animationData={animationData}
            imageMap={[
              { name: "Artboard_1.png", path: Artboard1 },
              {
                name: "United_Daughters_of_the_Confederacy-BW.jpg",
                path: UDOTC
              },
              { name: "broken.png", path: broken }
            ]}
            actions={actions}
            onFrameUpdate={this.handleFrameUpdate}
          />
        }
        rightPane={
          <Details
            {...this.state}
            animation={
              <LottieControl
                animationData={animationRight}
                actions={actions.filter(
                  // only pause, no audio
                  action => action.action === ANIMATION_ACTIONS.PAUSE
                )}
              />
            }
          />
        }
      />
    );
  }
}

Cypher.propTypes = propTypes;

export default Cypher;
