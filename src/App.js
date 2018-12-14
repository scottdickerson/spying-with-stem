import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { ROUTES } from "./constants/constants";
import "./App.css";
import SpyingPullScreen from "./containers/SpyingPullScreen/SpyingPullScreen";
import MainScreen from "./components/MainScreen/MainScreen";

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
    history.push(ROUTES.SELECT);
    this.resetTimer = setTimeout(this.reset, 3000);
  };
  reset = () => {
    window.location.reload(); // reload the whole page
  };
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={ROUTES.MAIN} component={SpyingPullScreen} />
          <Route exact path={ROUTES.SELECT} commponent={MainScreen} />
        </Switch>
      </div>
    );
  }
}

export default App;
