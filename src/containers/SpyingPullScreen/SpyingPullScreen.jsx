import React from "react";
import LottieControl from "../../components/LottieControl/LottieControl";
import animationData from "./animation/Pullscreen_Main.json";
import PullScreen from "../../components/PullScreen/PullScreen";

class SpyingPullScreen extends React.Component {
  render() {
    return (
      <PullScreen>
        <LottieControl animationData={animationData} isLooping={true} />
      </PullScreen>
    );
  }
}

export default SpyingPullScreen;
