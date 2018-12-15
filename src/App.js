import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router";
import { ROUTES } from "./constants/constants";
import SpyingPullScreen from "./containers/SpyingPullScreen/SpyingPullScreen";
import SpyingMainScreen from "./containers/SpyingMainScreen/SpyingMainScreen";

class App extends Component {
  componentDidMount() {
    this.touchListener = document.body.addEventListener("touchstart", () =>
      this.showSelection()
    );
    this.clickListener = document.body.addEventListener("click", () =>
      this.showSelection()
    );
  }
  showSelection = () => {
    const { history } = this.props;
    history.push(ROUTES.MAINSCREEN);
    this.resetTimer = setTimeout(this.reset, 3000);
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
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
