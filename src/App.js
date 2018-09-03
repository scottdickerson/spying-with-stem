import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LottieControl from "./components/LottieControl/LottieControl";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LottieControl />
      </div>
    );
  }
}

export default App;
