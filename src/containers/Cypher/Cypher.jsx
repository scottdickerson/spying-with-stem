import React from "react";
import PropTypes from "prop-types";

import SiteDetails from "../../components/SiteDetails/SiteDetails";
import Details from "../../components/Details/Details";
import CypherRight from "./CypherRight";
import CypherMain from "./CypherMain";

const propTypes = {
  isOpen: PropTypes.bool,
  onCloseSite: PropTypes.func.isRequired
};

const Cypher = ({ isOpen, onCloseSite }) => (
  <SiteDetails
    isOpen={isOpen}
    onCloseSite={onCloseSite}
    leftPane={<CypherMain />}
    rightPane={
      <Details
        title="Break the code!"
        subTitle="Frequency Analysis"
        details="Cyphers are one of the oldest types of encryption. Each letter of the alphabet is replaced by a symbol. <p> Spies like Rose Greenhow used cyphers to send secret messages."
        animation={<CypherRight />}
      />
    }
  />
);

Cypher.propTypes = propTypes;

export default Cypher;
