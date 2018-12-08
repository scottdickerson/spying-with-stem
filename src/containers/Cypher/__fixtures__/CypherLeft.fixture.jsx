import CypherLeft from "../CypherLeft";

export default {
  component: CypherLeft,
  props: {
    isOpen: true,
    onCloseSite: () => console.log("close the site!")
  }
};
