import React from "react";
import PropTypes from "prop-types";
import styles from "./Details.module.css";
import ReactHTMLParser from "react-html-parser";

const propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired
};

const Details = props => {
  const { title, subTitle, details } = props;

  return (
    <div className={styles.details}>
      <div className={styles.title}>{title}</div>
      <img
        className={styles.separator}
        src="img/Lines-TwoYellowDividers.png"
        alt=""
      />
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.details}>{ReactHTMLParser(details)}</div>
    </div>
  );
};

Details.propTypes = propTypes;
export default Details;
