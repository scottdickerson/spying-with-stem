import React from "react";
import PropTypes from "prop-types";

import SiteDetails from "../../components/SiteDetails/SiteDetails";
import Details from "../../components/Details/Details";
import { ANIMATION_ACTIONS } from "../../constants/constants";

import animationData from "./animation/Cypher_Main/Cypher_Main.json";
import animationRight from "./animation/Cypher_Right/Cypher_Right.json";
import actions from "./animation/Cypher_Main/Cypher_Main_Actions.json";
import LottieControl from "../../components/LottieControl/LottieControl";
import image0 from "./animation/Cypher_Main/images/img_0.png";
import image1 from "./animation/Cypher_Main/images/img_1.png";

const propTypes = {
  isOpen: PropTypes.bool,
  onCloseSite: PropTypes.func.isRequired
};

class Cypher extends React.Component {
  state = {
    title: "Break the code!",
    subTitle: "Frequency Analysis",
    details:
      "Cyphers are one of the oldest types of encryption. Each letter of the alphabet is replaced by a symbol. <p> Spies like Rose Greenhow used cyphers to send secret messages."
  };
  handleFrameUpdate = frame => {
    const matchingAction = actions.find(action => action.frame === frame);
    if (matchingAction && matchingAction.action === ANIMATION_ACTIONS.PAUSE) {
      this.setState({ ...matchingAction });
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
              { name: "img_0.png", path: image0 },
              { name: "img_1.png", path: image1 }
            ]}
            actions={actions}
            onFrameUpdate={this.handleFrameUpdate}
          />
        }
        rightPane={
          <Details
            {...this.state}
            animation={
              <LottieControl animationData={animationRight} actions={actions} />
            }
          />
        }
      />
    );
  }
}

Cypher.propTypes = propTypes;

export default Cypher;
