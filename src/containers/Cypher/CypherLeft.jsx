import React from "react";
import PropTypes from "prop-types";

import animationData from "./animation/Cypher_Main/Cypher_Main.json";
import actions from "./animation/Cypher_Main/Cypher_Main_Actions.json";
import LottieControl from "../../components/LottieControl/LottieControl";
import SiteDetails from "../../components/SiteDetails/SiteDetails";
import Details from "../../components/Details/Details";

import image0 from "./animation/Cypher_Main/images/img_0.png";
import image1 from "./animation/Cypher_Main/images/img_1.png";

const propTypes = {
  isOpen: PropTypes.bool,
  onCloseSite: PropTypes.func.isRequired
};

const CypherLeft = ({ isOpen, onCloseSite }) => (
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
      />
    }
    rightPane={
      <Details
        title="Break the code!"
        subTitle="Frequency Analysis"
        details="Cyphers are one of the oldest types of encryption. Each letter of the alphabet is replaced by a symbol. <p> Spies like Rose Greenhow used cyphers to send secret messages."
      />
    }
  />
);

CypherLeft.propTypes = propTypes;

export default CypherLeft;
