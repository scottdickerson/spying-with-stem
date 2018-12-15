import Cypher from "../Cypher";

export default {
  component: Cypher,
  props: {
    onCloseSite: () => console.log("close the site!")
  }
};
