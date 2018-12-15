import React from "react";
import MainScreen from "../../components/MainScreen/MainScreen";
import Intro from "../../components/Intro/Intro";
import TopTitle from "../../components/TopTitle/TopTitle";
import titleImage from "./img/HarrisonCountyTitle.png";
import StorySelector from "../../components/StorySelector/StorySelector";

const SpyingMainScreen = () => (
  <MainScreen>
    <TopTitle imageURL={titleImage}>SPYING with S.T.E.M</TopTitle>
    <Intro intro="People spy on other people" details="What's up with that" />
    <StorySelector
      onSelect={index => console.log(`selected Story: ${index}`)}
      stories={[
        { name: "CYPHER" },
        { name: "CODE BOOK" },
        { name: "COMPUTING" }
      ]}
    />
  </MainScreen>
);

export default SpyingMainScreen;
