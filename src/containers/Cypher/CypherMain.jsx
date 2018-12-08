import React from "react";

import animationData from "./animation/Cypher_Main/Cypher_Main.json";
import actions from "./animation/Cypher_Main/Cypher_Main_Actions.json";
import LottieControl from "../../components/LottieControl/LottieControl";
import image0 from "./animation/Cypher_Main/images/img_0.png";
import image1 from "./animation/Cypher_Main/images/img_1.png";

const CypherMain = () => (
  <LottieControl
    animationData={animationData}
    imageMap={[
      { name: "img_0.png", path: image0 },
      { name: "img_1.png", path: image1 }
    ]}
    actions={actions}
  />
);

export default CypherMain;
