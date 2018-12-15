import React from "react";
import { ROUTES } from "../../constants/constants";
import { withRouter } from "react-router";
import styles from "./PullScreen.module.css";

class PullScreen extends React.Component {
  showSelection = () => {
    const { history } = this.props;
    history.push(ROUTES.MAINSCREEN);
  };

  render() {
    const { children } = this.props;
    return (
      <div className={styles.pullScreen} onClick={this.showSelection}>
        <div className={styles.title}>{children}</div>
      </div>
    );
  }
}

export default withRouter(PullScreen);
