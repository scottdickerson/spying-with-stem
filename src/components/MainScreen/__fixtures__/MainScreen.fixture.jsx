import React, { Fragment } from "react";
import MainScreen from "../MainScreen";
import Intro from "../../Intro/Intro";
import TopTitle from "../../TopTitle/TopTitle";
import titleImage from "../../../containers/SpyingMainScreen/img/HarrisonCountyTitle.png";

export default {
  component: MainScreen,
  props: {
    children: (
      <Fragment>
        <TopTitle imageURL={titleImage}>SPYING with S.T.E.M</TopTitle>
        <Intro
          intro="People spy on other people"
          details="What's up with that"
        />
      </Fragment>
    )
  }
};
