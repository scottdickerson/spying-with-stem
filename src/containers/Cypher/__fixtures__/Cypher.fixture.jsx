import Cypher from "../Cypher";

export default {
  component: Cypher,
  props: {
    isOpen: true,
    onCloseSite: () => console.log("close the site!")
  }
};
