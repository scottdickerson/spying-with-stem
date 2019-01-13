import React from "react";
import actions from "./animation/Telegram_Main/Telegram_Main_Actions";
import { ANIMATION_ACTIONS } from "../../constants/constants";
import leftAnimation from "./animation/Telegram_Main/Telegram_Main.json";
import rightAnimation from "./animation/Telegram_Right/Telegram_Right.json";
import PropTypes from "prop-types";
import LottieControl from "../../components/LottieControl/LottieControl";
import broken from "./animation/Telegram_Main/images/broken.png";
import intercepted from "./animation/Telegram_Main/images/intercepted.png";
import codebook0 from "./animation/Telegram_Right/images/codebook_sprite_00000.png";
import codebook1 from "./animation/Telegram_Right/images/codebook_sprite_00001.png";
import codebook2 from "./animation/Telegram_Right/images/codebook_sprite_00002.png";
import codebook3 from "./animation/Telegram_Right/images/codebook_sprite_00003.png";
import codebook4 from "./animation/Telegram_Right/images/codebook_sprite_00004.png";
import codebook5 from "./animation/Telegram_Right/images/codebook_sprite_00005.png";
import codebook6 from "./animation/Telegram_Right/images/codebook_sprite_00006.png";
import codebook7 from "./animation/Telegram_Right/images/codebook_sprite_00007.png";
import codebook8 from "./animation/Telegram_Right/images/codebook_sprite_00008.png";
import codebook9 from "./animation/Telegram_Right/images/codebook_sprite_00009.png";
import codebook10 from "./animation/Telegram_Right/images/codebook_sprite_00010.png";
import codebook11 from "./animation/Telegram_Right/images/codebook_sprite_00011.png";
import codebook12 from "./animation/Telegram_Right/images/codebook_sprite_00012.png";
import codebook13 from "./animation/Telegram_Right/images/codebook_sprite_00013.png";
import codebook14 from "./animation/Telegram_Right/images/codebook_sprite_00014.png";
import codebook15 from "./animation/Telegram_Right/images/codebook_sprite_00015.png";
import codebook16 from "./animation/Telegram_Right/images/codebook_sprite_00016.png";
import codebook17 from "./animation/Telegram_Right/images/codebook_sprite_00017.png";
import codebook18 from "./animation/Telegram_Right/images/codebook_sprite_00018.png";
import codebook19 from "./animation/Telegram_Right/images/codebook_sprite_00019.png";
import codebook20 from "./animation/Telegram_Right/images/codebook_sprite_00020.png";
import codebook21 from "./animation/Telegram_Right/images/codebook_sprite_00021.png";
import codebook22 from "./animation/Telegram_Right/images/codebook_sprite_00022.png";
import codebook23 from "./animation/Telegram_Right/images/codebook_sprite_00023.png";
import codebook24 from "./animation/Telegram_Right/images/codebook_sprite_00024.png";
import codebook25 from "./animation/Telegram_Right/images/codebook_sprite_00025.png";
import codebook26 from "./animation/Telegram_Right/images/codebook_sprite_00026.png";
import codebook27 from "./animation/Telegram_Right/images/codebook_sprite_00027.png";
import codebook28 from "./animation/Telegram_Right/images/codebook_sprite_00028.png";
import codebook29 from "./animation/Telegram_Right/images/codebook_sprite_00029.png";

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
        actions={actions}
      />
    }
    rightPane={
      <Details
        title="Break the code!"
        subTitle="Frequency Analysis"
        details="Telegrams are one of the oldest types of encryption. Each letter of the alphabet is replaced by a symbol. <p> Spies like Rose Greenhow used cyphers to send secret messages."
        animation={
          <LottieControl
            animationData={rightAnimation}
            imageMap={[
              { name: "codebook_sprite_00000.png", path: codebook0 },
              { name: "codebook_sprite_00001.png", path: codebook1 },
              { name: "codebook_sprite_00002.png", path: codebook2 },
              { name: "codebook_sprite_00003.png", path: codebook3 },
              { name: "codebook_sprite_00004.png", path: codebook4 },
              { name: "codebook_sprite_00005.png", path: codebook5 },
              { name: "codebook_sprite_00006.png", path: codebook6 },
              { name: "codebook_sprite_00007.png", path: codebook7 },
              { name: "codebook_sprite_00008.png", path: codebook8 },
              { name: "codebook_sprite_00009.png", path: codebook9 },
              { name: "codebook_sprite_00010.png", path: codebook10 },
              { name: "codebook_sprite_00011.png", path: codebook11 },
              { name: "codebook_sprite_00012.png", path: codebook12 },
              { name: "codebook_sprite_00013.png", path: codebook13 },
              { name: "codebook_sprite_00014.png", path: codebook14 },
              { name: "codebook_sprite_00015.png", path: codebook15 },
              { name: "codebook_sprite_00016.png", path: codebook16 },
              { name: "codebook_sprite_00017.png", path: codebook17 },
              { name: "codebook_sprite_00018.png", path: codebook18 },
              { name: "codebook_sprite_00019.png", path: codebook19 },
              { name: "codebook_sprite_00020.png", path: codebook20 },
              { name: "codebook_sprite_00021.png", path: codebook21 },
              { name: "codebook_sprite_00022.png", path: codebook22 },
              { name: "codebook_sprite_00023.png", path: codebook23 },
              { name: "codebook_sprite_00024.png", path: codebook24 },
              { name: "codebook_sprite_00025.png", path: codebook25 },
              { name: "codebook_sprite_00026.png", path: codebook26 },
              { name: "codebook_sprite_00027.png", path: codebook27 },
              { name: "codebook_sprite_00028.png", path: codebook28 },
              { name: "codebook_sprite_00029.png", path: codebook29 }
            ]}
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

Telegram.propTypes = propTypes;

export default Telegram;
