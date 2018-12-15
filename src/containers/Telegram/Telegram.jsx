import React from "react";
import leftAnimation from "./animation/Telegram_Main/Telegram_Main.json";
import rightAnimation from "./animation/Telegram_Right/Telegram_Right.json";
import PropTypes from "prop-types";
import LottieControl from "../../components/LottieControl/LottieControl";
import broken from "./animation/Telegram_Main/images/broken.png";
import intercepted from "./animation/Telegram_Main/images/intercepted.png";

import SiteDetails from "../../components/SiteDetails/SiteDetails";
import Details from "../../components/Details/Details";

const propTypes = {
  isOpen: PropTypes.bool
};

const Telegram = ({ isOpen, onCloseSite }) => (
  <SiteDetails
    isOpen={isOpen}
    onCloseSite={onCloseSite}
    leftPane={
      <LottieControl
        animationData={leftAnimation}
        imageMap={[
          { name: "broken.png", path: broken },
          { name: "intercepted.png", path: intercepted }
        ]}
      />
    }
    rightPane={
      <Details
        title="Break the code!"
        subTitle="Frequency Analysis"
        details="Telegrams are one of the oldest types of encryption. Each letter of the alphabet is replaced by a symbol. <p> Spies like Rose Greenhow used cyphers to send secret messages."
        animation={<LottieControl animationData={rightAnimation} />}
      />
    }
  />
);

Telegram.propTypes = propTypes;

export default Telegram;
