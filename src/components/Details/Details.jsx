import React from "react";
import PropTypes from "prop-types";
import styles from "./Details.module.css";
import ReactHTMLParser from "react-html-parser";
import Divider from "./img/Lines-TwoYellowDividers.png";

const propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  details: PropTypes.string.isRequired,
  animation: PropTypes.node.isRequired
};

const Details = props => {
  const { title, subTitle, details, animation } = props;

  return (
    <div className={styles.details}>
      <div className={styles.title}>{title}</div>
      <img className={styles.separator} src={Divider} alt="" />
      {subTitle ? <div className={styles.subTitle}>{subTitle}</div> : null}
      <div className={styles.blurb}>{ReactHTMLParser(details)}</div>
      <div className={styles.animation}>{animation}</div>
    </div>
  );
};

Details.propTypes = propTypes;
export default Details;
