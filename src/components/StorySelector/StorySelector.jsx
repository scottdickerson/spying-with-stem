import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./StorySelector.module.css";

const propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, image: PropTypes.string })
  ),
  onSelect: PropTypes.func.isRequired
};
const StorySelector = ({ stories, onSelect }) => {
  return (
    <Fragment>
      <div className={styles.background} />
      <div className={styles.storySelector}>
        {stories.map((story, index) => (
          <div
            key={story.name}
            className={styles.story}
            tabIndex="0"
            onClick={() => onSelect(index, story)}
          >
            <img alt={story.name} className={styles.image} />
            <div className={styles.name}>{story.name}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

StorySelector.propTypes = propTypes;
export default StorySelector;
