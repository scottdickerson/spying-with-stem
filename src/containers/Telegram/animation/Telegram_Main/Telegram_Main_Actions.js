import envelope from "../../../../sounds/envelope.mp3";
import pistol from "../../../../sounds/pistol.mp3";
import typeWriterShort from "../../../../sounds/Typewriter_short.mp3";
import typeWriterDing from "../../../../sounds/typewriter_ding.mp3";
import telegraphShort from "../../../../sounds/telegraph_short.mp3";
import slide from "../../../../sounds/slide.mp3";
import doublePop from "../../../../sounds/double_pop.mp3";
import multiSwoosh from "../../../../sounds/multiSwoosh.mp3";
import stamp from "../../../../sounds/stamp.mp3";
import winTone from "../../../../sounds/win_tone.mp3";

export default [
  {
    frame: 0,
    action: "updateText",
    title: "Code Books",
    details:
      "During World War 1, communication technologies improved. So cryptography changed. "
  },
  {
    frame: 0,
    action: "playSound",
    soundFile: telegraphShort
  },
  {
    frame: 50,
    action: "playSound",
    soundFile: typeWriterShort
  },
  {
    frame: 167,
    action: "playSound",
    soundFile: typeWriterDing
  },
  // More Info
  {
    frame: 206,
    action: "pause"
  },
  {
    frame: 212,
    action: "updateText",
    details:
      "Codes that replaced whole words, instead of individual letters, were harder to break than cyphers. "
  },
  {
    frame: 215,
    action: "playSound",
    soundFile: pistol
  },
  // More Info 2
  {
    frame: 300,
    action: "pause"
  },

  {
    frame: 302,
    action: "updateText",
    details:
      "Germany sent secret messages using multiple sets of codes - written in tiny codebooks."
  },
  {
    frame: 314,
    action: "playSound",
    soundFile: envelope
  },
  {
    frame: 465,
    action: "playSound",
    soundFile: slide
  },
  // Step 1 Decoding
  { frame: 500, action: "pause" },
  {
    frame: 502,
    action: "updateText",
    title: "Break the Code!",
    subTitle: "Step 1",
    details: "Steal as many telegrams and codebooks as you can. "
  },
  {
    frame: 612,
    action: "playSound",
    soundFile: pistol
  },
  {
    frame: 622,
    action: "playSound",
    soundFile: pistol
  },
  {
    frame: 633,
    action: "playSound",
    soundFile: pistol
  },
  // Step 2 Decoding
  {
    frame: 640,
    action: "pause"
  },
  {
    frame: 642,
    action: "updateText",
    subTitle: "Step 2",
    details: "Match and replace the codes you have. "
  },
  {
    frame: 645,
    action: "playSound",
    soundFile: envelope
  },
  {
    frame: 658,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 671,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 680,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 686,
    action: "playSound",
    soundFile: envelope
  },
  {
    frame: 722,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 727,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 734,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 756,
    action: "playSound",
    soundFile: envelope
  },

  {
    frame: 772,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 777,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 783,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 793,
    action: "playSound",
    soundFile: envelope
  },
  {
    frame: 814,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 820,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 825,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 889,
    action: "playSound",
    soundFile: envelope
  },
  {
    frame: 921,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 934,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 943,
    action: "playSound",
    soundFile: doublePop
  },
  // telegrams come together
  {
    frame: 951,
    action: "playSound",
    soundFile: multiSwoosh
  },
  // Step 3 Decoding
  {
    frame: 968,
    action: "pause"
  },
  {
    frame: 970,
    action: "updateText",
    subTitle: "Step 3",
    details: "Use algebra to solve for the codes you don’t have. "
  },
  {
    frame: 1013,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 1042,
    action: "playSound",
    soundFile: doublePop
  },
  {
    frame: 1069,
    action: "playSound",
    soundFile: doublePop
  },
  // Broken!!!
  {
    frame: 1099,
    action: "pause"
  },
  {
    frame: 1100,
    action: "updateText",
    title: "Code Broken",
    subTitle: "Zimmerman Telegram",
    details:
      "Once broken, this famous secret message from the Germans convinced the United States to enter World War I. "
  },

  {
    frame: 1115,
    action: "playSound",
    soundFile: stamp
  },
  {
    frame: 1125,
    action: "playSound",
    soundFile: winTone
  }
];
