import React from "react";
import PropTypes from "prop-types";
import { ROUTES } from "../../constants/constants";
import { withRouter } from "react-router";
import styles from "./PullScreen.module.css";

class PullScreen extends React.Component {
  static propTypes = {
    resetDelay: PropTypes.number
  };
  static defaultProps = {
    resetDelay: 120000
  };
  componentDidMount() {
    this.touchListener = document.body.addEventListener("touchstart", () =>
      this.resetTimer()
    );
    this.clickListener = document.body.addEventListener("click", () =>
      this.resetTimer()
    );
  }
  resetTimer = () => {
    const { resetDelay } = this.props;
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(this.reset, resetDelay);
  };
  reset = () => {
    const { history } = this.props;
    history.push(ROUTES.PULLSCREEN);
    window.location.reload(); // reload the whole page
  };
  showSelection = () => {
    const { history } = this.props;
    history.push(ROUTES.MAINSCREEN);
  };

  render() {
    const { children } = this.props;
    return (
      <div className={styles.pullScreen} onClick={this.showSelection}>
        {children}
      </div>
    );
  }
}

export default withRouter(PullScreen);
