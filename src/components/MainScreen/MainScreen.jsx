import React from "react";

import styles from "./MainScreen.module.css";

import Intro from "../Intro/Intro";

const MainScreen = props => {
  return (
    <div className={styles.mainScreen}>
      <Intro />
    </div>
  );
};

export default MainScreen;
