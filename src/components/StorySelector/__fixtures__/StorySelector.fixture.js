import StorySelector from "../StorySelector";

export default {
  component: StorySelector,
  props: {
    stories: [{ name: "CYPHER" }, { name: "CODE BOOK" }, { name: "COMPUTING" }],
    onSelect: index => console.log(`story selected: ${index}`)
  }
};
