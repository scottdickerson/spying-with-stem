import React from "react";
import LottieControl from "../../components/LottieControl/LottieControl";
import animationData from "./animation/Pullscreen_Main.json";
import styles from "./SpyingPullScreen.module.css";

const SpyingPullScreen = () => (
  <div className={styles.pullScreen}>
    <LottieControl animationData={animationData} isLooping={true} />
  </div>
);

export default SpyingPullScreen;
