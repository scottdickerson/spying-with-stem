import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import ButtonClose from "./img/Button-Close-X.png";

import styles from "./SiteDetails.module.css";

class SiteDetails extends Component {
  static propTypes = {
    rightPane: PropTypes.node.isRequired,
    leftPane: PropTypes.node.isRequired,
    onCloseSite: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
  };

  render() {
    const { onCloseSite, isOpen, rightPane, leftPane } = this.props;

    return (
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isOpen}
        timeout={1000}
        classNames={styles.bottom}
      >
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
            onClick={() => onCloseSite()}
          />
        </div>
      </CSSTransition>
    );
  }
}

export default SiteDetails;
