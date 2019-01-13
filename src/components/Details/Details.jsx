import React from "react";
import PropTypes from "prop-types";
import styles from "./Details.module.css";
import ReactHTMLParser from "react-html-parser";
import Divider from "./img/Lines-TwoYellowDividers.png";
import { ANIMATION_ACTIONS } from "../../constants/constants";

class Details extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    details: PropTypes.string.isRequired,
    animation: PropTypes.node.isRequired
  };
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  handleNextAction = action => {
    if (action.action === ANIMATION_ACTIONS.UPDATE_TEXT) {
      this.setState({
        ...action,
        subTitle: action.subTitle || null
      });
    }
  };
  render() {
    const { title, subTitle, details, animation } = this.state;

    return (
      <div className={styles.details}>
        <div className={styles.title}>{title}</div>
        <img className={styles.separator} src={Divider} alt="" />
        {subTitle ? <div className={styles.subTitle}>{subTitle}</div> : null}
        <div className={styles.blurb}>{ReactHTMLParser(details)}</div>
        <div className={styles.animation}>
          {React.cloneElement(animation, {
            onNextAction: this.handleNextAction // Need to callback to the state updater
          })}
        </div>
      </div>
    );
  }
}

export default Details;
