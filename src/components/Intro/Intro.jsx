import React from "react";
import PropTypes from "prop-types";
import ReactHTMLParser from "react-html-parser";

import styles from "./Intro.module.css";

const propTypes = {
  intro: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired
};

const Intro = props => {
  const { intro, details, callToAction } = props;
  return (
    <div className={styles.intro}>
      <div className={styles.introText}>{ReactHTMLParser(intro)}</div>
      <div className={styles.introDetails}>
        <div className={styles.introDetailsText}>
          {ReactHTMLParser(details)}
          {callToAction}
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = propTypes;

export default Intro;
