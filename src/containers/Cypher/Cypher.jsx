import React from "react";
import PropTypes from "prop-types";
import { ANIMATION_ACTIONS } from "../../constants/constants";
import SiteDetails from "../../components/SiteDetails/SiteDetails";
import Details from "../../components/Details/Details";

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

const Cypher = ({ isOpen, onCloseSite }) => (
  <SiteDetails
    isOpen={isOpen}
    onCloseSite={onCloseSite}
    leftPane={
      <LottieControl
        animationData={animationData}
        promptDelay={2000}
        imageMap={[
          { name: "Artboard_1.png", path: Artboard1 },
          {
            name: "United_Daughters_of_the_Confederacy-BW.jpg",
            path: UDOTC
          },
          { name: "broken.png", path: broken }
        ]}
        actions={actions}
        onComplete={onCloseSite}
      />
    }
    rightPane={
      <Details
        animation={
          <LottieControl
            animationData={animationRight}
            actions={actions.filter(
              // audio is driven by the other control
              action => action.action !== ANIMATION_ACTIONS.PLAY_SOUND
            )}
          />
        }
      />
    }
  />
);

Cypher.propTypes = propTypes;

export default Cypher;
