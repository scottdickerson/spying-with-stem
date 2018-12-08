import React from "react";

import animationData from "./animation/Cypher_Right/Cypher_Right.json";
import actions from "./animation/Cypher_Main/Cypher_Main_Actions.json";
import LottieControl from "../../components/LottieControl/LottieControl";

const CypherRight = () => (
  <LottieControl animationData={animationData} actions={actions} />
);

export default CypherRight;
