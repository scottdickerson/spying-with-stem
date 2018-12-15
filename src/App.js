import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router";
import { ROUTES } from "./constants/constants";
import SpyingPullScreen from "./containers/SpyingPullScreen/SpyingPullScreen";
import SpyingMainScreen from "./containers/SpyingMainScreen/SpyingMainScreen";
import Cypher from "./containers/Cypher/Cypher";

class App extends Component {
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
