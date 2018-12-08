import AudioPlayer from "../AudioPlayer";

import SampleAudio from "../sounds/SampleAudio.mp3";

export default [
  {
    component: AudioPlayer,
    name: "not playing",
    props: { soundFile: SampleAudio }
  },
  {
    component: AudioPlayer,
    name: "playing",
    props: { soundFile: SampleAudio, isPlaying: true }
  }
];
