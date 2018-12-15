import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from "react-router";
import { ROUTES } from "./constants/constants";
import SpyingPullScreen from "./containers/SpyingPullScreen/SpyingPullScreen";
import SpyingMainScreen from "./containers/SpyingMainScreen/SpyingMainScreen";
import Cypher from "./containers/Cypher/Cypher";

class App extends Component {
  static propTypes = {
    resetDelay: PropTypes.number
  };
  static defaultProps = {
    resetDelay: 30000
  };
  componentDidMount() {
    this.touchListener = document.body.addEventListener("touchstart", () =>
      this.resetTimer()
    );
    this.clickListener = document.body.addEventListener("click", () => {
      console.log("hi there");
    });
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
  render() {
    const { location } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path={ROUTES.PULLSCREEN} component={SpyingPullScreen} />
          <Route path={ROUTES.MAINSCREEN} component={SpyingMainScreen} />
        </Switch>
        <Cypher isOpen={location.pathname === ROUTES.CYPHER} />
      </div>
    );
  }
}

export default withRouter(App);
