import React from "react";

import styles from "./MainScreen.module.css";

const MainScreen = props => {
  return <div className={styles.mainScreen}>{props.children}</div>;
};

export default MainScreen;
