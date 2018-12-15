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
      this.showSelection()
    );
    this.clickListener = document.body.addEventListener("click", () =>
      this.showSelection()
    );
  }
  showSelection = () => {
    const { history, resetDelay } = this.props;
    history.push(ROUTES.MAINSCREEN);
    this.resetTimer = setTimeout(this.reset, resetDelay);
  };
  reset = () => {
    const { history } = this.props;
    history.push(ROUTES.PULLSCREEN);
    window.location.reload(); // reload the whole page
  };
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={ROUTES.PULLSCREEN} component={SpyingPullScreen} />
          <Route exact path={ROUTES.MAINSCREEN} component={SpyingMainScreen} />
          <Route exact path={ROUTES.CYPHER} component={Cypher} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
