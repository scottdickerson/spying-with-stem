import React from "react";
import Details from "../Details";
import animationData from "./testanimations/Cypher_Right.json";
import LottieControl from "../../LottieControl/LottieControl";

export default {
  component: Details,
  props: {
    title: "Break the code!",
    subTitle: "Frequency Analysis",
    details:
      "Cyphers are one of the oldest types of encryption. Each letter of the alphabet is replaced by a symbol. <p> Spies like Rose Greenhow used cyphers to send secret messages.",
    animation: <LottieControl animationData={animationData} />
  }
};
