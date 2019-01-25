import React from "react";
import MainScreen from "../../components/MainScreen/MainScreen";
import { withRouter } from "react-router";
import { ROUTES } from "../../constants/constants";
import Intro from "../../components/Intro/Intro";
import TopTitle from "../../components/TopTitle/TopTitle";
import titleImage from "./img/HarrisonCountyTitle.png";
import StorySelector from "../../components/StorySelector/StorySelector";
import codebook from "./img/CodeBook.png";
import computing from "./img/Computing.png";
import cypher from "./img/Cypher.png";

class SpyingMainScreen extends React.Component {
  handleSelection = index => {
    const { history } = this.props;
    switch (index) {
      case 0:
        history.push(ROUTES.CYPHER);
        break;
      case 1:
        history.push(ROUTES.TELEGRAM);
        break;
      case 2:
        history.push(ROUTES.COMPUTING);
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
          intro="<p>Cryptography, the science of secret codes, has evolved in times of warfare.
</p>
Explore three historic methods for passing &mdash; and breaking &mdash; secret codes. "
        />
        <StorySelector
          onSelect={this.handleSelection}
          stories={[
            { name: "CYPHERS", image: cypher },
            { name: "CODEBOOKS", image: codebook },
            { name: "COMPUTING", image: computing }
          ]}
        />
      </MainScreen>
    );
  }
}

export default withRouter(SpyingMainScreen);
