import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import ButtonClose from "./img/Button-Close-X.png";

import styles from "./SiteDetails.module.css";

class SiteDetails extends Component {
  static propTypes = {
    rightPane: PropTypes.node.isRequired,
    leftPane: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onCloseSite: PropTypes.func.isRequired
  };

  render() {
    const { isOpen, rightPane, leftPane, onCloseSite, animate } = this.props;

    const details = (
      <div className={styles.siteDetails}>
        <div className={styles.siteDetailContent}>
          <div className={styles.siteDetailBackground} />
          <div className={styles.leftPane}>{leftPane}</div>
          <div className={styles.rightPane}>{rightPane}</div>
        </div>
        <img
          src={ButtonClose}
          alt="Close"
          className={styles.closeButton}
          onClick={onCloseSite}
        />
      </div>
    );
    return animate ? (
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isOpen}
        timeout={500}
        classNames="bottom"
      >
        {details}
      </CSSTransition>
    ) : isOpen ? (
      details
    ) : null;
  }
}

export default SiteDetails;
