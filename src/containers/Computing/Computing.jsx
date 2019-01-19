import React from "react";
import PropTypes from "prop-types";
import { ANIMATION_ACTIONS } from "../../constants/constants";
import SiteDetails from "../../components/SiteDetails/SiteDetails";
import Details from "../../components/Details/Details";

import animationData from "./animation/Computing_Main/Computing_Main.json";
import animationRight from "./animation/Computing_Right/Computing_Right.json";
import actions from "./animation/Computing_Main/Computing_Main_Actions";
import LottieControl from "../../components/LottieControl/LottieControl";
import broken from "./animation/Computing_Main/images/broken.png";
import iconLetterhead from "./animation/Computing_Main/images/icon_for_nazi_letterhead.jpg";
import intercepted from "./animation/Computing_Main/images/intercepted.png";
import Layer1 from "./animation/Computing_Main/images/Layer_1_radio_layers.png";
import Layer2 from "./animation/Computing_Main/images/Layer_2_radio_layers.png";
import Layer3 from "./animation/Computing_Main/images/Layer_3_radio_layers.png";
import rotorBlur4 from "./animation/Computing_Main/images/rotor_blur_v5.00004.png";
import rotorBlur11 from "./animation/Computing_Main/images/rotor_blur_v5.00011.png";
import rotorBlur15 from "./animation/Computing_Main/images/rotor_blur_v5.00015.png";
import rotorBlur20 from "./animation/Computing_Main/images/rotor_blur_v5.00020.png";
import rotorBlur24 from "./animation/Computing_Main/images/rotor_blur_v5.00024.png";
import rotorBlur25 from "./animation/Computing_Main/images/rotor_blur_v5.00025.png";

import iconLetterheadRight from "./animation/Computing_Right/images/icon_for_nazi_letterhead.jpg";
import brokenRight from "./animation/Computing_Right/images/broken.png";
import img0 from "./animation/Computing_Right/images/img_0.png";
import img1 from "./animation/Computing_Right/images/img_1.png";
import img2 from "./animation/Computing_Right/images/img_2.png";

const propTypes = {
  isOpen: PropTypes.bool,
  onCloseSite: PropTypes.func.isRequired
};

const Computing = ({ isOpen, onCloseSite }) => (
  <SiteDetails
    isOpen={isOpen}
    onCloseSite={onCloseSite}
    leftPane={
      <LottieControl
        animationData={animationData}
        lazyLoadAnimations={true}
        promptDelay={2000}
        imageMap={[
          { name: "icon_for_nazi_letterhead.jpg", path: iconLetterhead },
          { name: "intercepted.png", path: intercepted },
          { name: "Layer_1_radio_layers.png", path: Layer1 },
          { name: "Layer_2_radio_layers.png", path: Layer2 },
          { name: "Layer_3_radio_layers.png", path: Layer3 },
          { name: "rotor_blur_v5.00004.png", path: rotorBlur4 },
          { name: "rotor_blur_v5.00011.png", path: rotorBlur11 },
          { name: "rotor_blur_v5.00015.png", path: rotorBlur15 },
          { name: "rotor_blur_v5.00020.png", path: rotorBlur20 },
          { name: "rotor_blur_v5.00024.png", path: rotorBlur24 },
          { name: "rotor_blur_v5.00025.png", path: rotorBlur25 },
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
            lazyLoadAnimations={true}
            actions={actions.filter(
              // audio is driven by the other control
              action => action.action !== ANIMATION_ACTIONS.PLAY_SOUND
            )}
            imageMap={[
              { name: "img_0.png", path: img0 },
              { name: "img_1.png", path: img1 },
              { name: "img_2.png", path: img2 },
              {
                name: "icon_for_nazi_letterhead.jpg",
                path: iconLetterheadRight
              },
              { name: "broken.png", path: brokenRight }
            ]}
          />
        }
      />
    }
  />
);

Computing.propTypes = propTypes;

export default Computing;
