import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  isPlaying: PropTypes.bool,
  soundFile: PropTypes.string.isRequired
};
const defaultProps = {
  isPlaying: false
};
const AudioPlayer = ({ isPlaying, soundFile }) => (
  <audio autoPlay={isPlaying} src={soundFile} />
);

AudioPlayer.propTypes = propTypes;
AudioPlayer.defaultProps = defaultProps;
export default AudioPlayer;
