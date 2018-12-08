import AudioPlayer from "../AudioPlayer";

export default [
  {
    component: AudioPlayer,
    name: "not playing",
    props: { soundFile: "./SampleAudio.mp3" }
  },
  {
    component: AudioPlayer,
    name: "playing",
    props: { soundFile: "SampleAudio.mp3", isPlaying: true }
  }
];
