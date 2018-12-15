import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import ButtonClose from "./img/Button-Close-X.png";

import styles from "./SiteDetails.module.css";

class SiteDetails extends Component {
  static propTypes = {
    rightPane: PropTypes.node.isRequired,
    leftPane: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired
  };

  handleCloseSite = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { isOpen, rightPane, leftPane } = this.props;

    return (
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isOpen}
        timeout={1000}
        classNames="bottom"
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
            onClick={this.handleCloseSite}
          />
        </div>
      </CSSTransition>
    );
  }
}

export default withRouter(SiteDetails);
