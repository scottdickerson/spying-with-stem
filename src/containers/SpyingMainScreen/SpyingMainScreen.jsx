import React from "react";
import MainScreen from "../../components/MainScreen/MainScreen";
import { withRouter } from "react-router";
import { ROUTES } from "../../constants/constants";
import Intro from "../../components/Intro/Intro";
import TopTitle from "../../components/TopTitle/TopTitle";
import titleImage from "./img/HarrisonCountyTitle.png";
import StorySelector from "../../components/StorySelector/StorySelector";

class SpyingMainScreen extends React.Component {
  handleSelection = index => {
    const { history } = this.props;
    switch (index) {
      case 0:
        history.push(ROUTES.CYPHER);
        break;
      default:
        return;
    }
  };
  render() {
    return (
      <MainScreen>
        <TopTitle imageURL={titleImage}>SPYING with S.T.E.M</TopTitle>
        <Intro
          intro="People spy on other people"
          details="What's up with that"
        />
        <StorySelector
          onSelect={this.handleSelection}
          stories={[
            { name: "CYPHER" },
            { name: "CODE BOOK" },
            { name: "COMPUTING" }
          ]}
        />
      </MainScreen>
    );
  }
}

export default withRouter(SpyingMainScreen);
