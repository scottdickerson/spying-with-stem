import airyStick from "../../../../sounds/airy_stick.mp3";
import ratchetShort from "../../../../sounds/ratchet_short.mp3";
import ratchetLong from "../../../../sounds/ratchet_long.mp3";
import typeWriterKey from "../../../../sounds/typewriter_key.mp3";
import pop from "../../../../sounds/pop.mp3";
import typeWriterAndDing from "../../../../sounds/typewriter_and_ding.mp3";
import stamp from "../../../../sounds/stamp.mp3";
import winTone from "../../../../sounds/win_tone.mp3";
import tuningRadio from "../../../../sounds/tuning_radio.mp3";
import buzzer from "../../../../sounds/buzzer.mp3";
import oldIBM from "../../../../sounds/old_ibm.mp3";
import wineglassDing from "../../../../sounds/wineglass_ding.mp3";

import whooshLow from "../../../../sounds/whooshLow.mp3";

export default [
  {
    frame: 0,
    action: "updateText",
    title: "Computing",
    details:
      "By World War II, Nazi Germany invented a machine to produce an “unbreakable” code.  "
  },
  {
    frame: 1,
    action: "playSound",
    soundFile: whooshLow
  },
  {
    frame: 30,
    action: "pause"
  },
  // Machine has appeared
  {
    frame: 35,
    action: "updateText",
    details:
      "A mathematical algorithm produced a unique code with each key press.  "
  },
  {
    frame: 50,
    action: "playSound",
    soundFile: airyStick
  },
  {
    frame: 60,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 62,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 80,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 91,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 93,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 104,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 121,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 123,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 134,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 147,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 149,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 163,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 178,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 179,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 189,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 193,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 195,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 210,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 232,
    action: "playSound",
    soundFile: typeWriterAndDing
  },
  // First code produced
  {
    frame: 255,
    action: "pause"
  },
  {
    frame: 260,
    action: "updateText",
    details:
      "Even the same word would be coded differently each time it appeared.   "
  },
  {
    frame: 260,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 262,
    action: "playSound",
    soundFile: typeWriterAndDing
  },
  {
    frame: 276,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 282,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 284,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 299,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 303,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 305,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 318,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 325,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 327,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 342,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 345,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 347,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 359,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 363,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 365,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 382,
    action: "playSound",
    soundFile: typeWriterAndDing
  },
  {
    frame: 383,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 400,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 402,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 415,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 420,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 422,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 440,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 443,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 445,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 456,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 463,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 465,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 480,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 485,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 487,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 496,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 503,
    action: "playSound",
    soundFile: typeWriterKey
  },
  {
    frame: 505,
    action: "playSound",
    soundFile: ratchetShort
  },
  {
    frame: 521,
    action: "playSound",
    soundFile: pop
  },
  {
    frame: 528,
    action: "playSound",
    soundFile: typeWriterAndDing
  },
  { frame: 560, action: "pause" },
  {
    frame: 565,
    action: "updateText",
    details:
      "Germany sent the coded messages over the radio, certain no one could break their code. "
  },
  // Radio time
  {
    frame: 584,
    action: "playSound",
    soundFile: tuningRadio
  },
  // Allies capture enigma
  { frame: 710, action: "pause" },
  {
    frame: 715,
    action: "updateText",
    title: "Break the Code!",
    details: "The Allies captured one of Germany’s Enigma machines. "
  },
  {
    frame: 728,
    action: "playSound",
    soundFile: whooshLow
  },
  {
    frame: 732,
    action: "playSound",
    soundFile: ratchetLong
  },

  // Allies can't break!
  { frame: 800, action: "pause" },
  {
    frame: 805,
    action: "updateText",
    details:
      "To break the code they would have to try countless possibilities.  "
  },

  {
    frame: 809,
    action: "playSound",
    soundFile: buzzer
  },
  {
    frame: 814,
    action: "playSound",
    soundFile: ratchetLong
  },
  {
    frame: 880,
    action: "playSound",
    soundFile: buzzer
  },
  {
    frame: 901,
    action: "playSound",
    soundFile: ratchetLong
  },
  {
    frame: 961,
    action: "playSound",
    soundFile: buzzer
  },
  { frame: 965, action: "pause" },
  {
    frame: 970,
    action: "updateText",
    details: "No person could do it because it would take lifetimes.  "
  },
  { frame: 980, action: "pause" },
  {
    frame: 985,
    action: "updateText",
    details:
      "So codebreakers invented “computers” which could calculate thousands of possible combinations each minute.  "
  },
  {
    frame: 990,
    action: "playSound",
    soundFile: oldIBM
  },
  {
    frame: 1040,
    action: "playSound",
    soundFile: wineglassDing
  },
  {
    frame: 1101,
    action: "playSound",
    soundFile: wineglassDing
  },
  {
    frame: 1145,
    action: "playSound",
    soundFile: wineglassDing
  },
  {
    frame: 1217,
    action: "playSound",
    soundFile: wineglassDing
  },
  {
    frame: 1264,
    action: "playSound",
    soundFile: wineglassDing
  },
  {
    frame: 1348,
    action: "playSound",
    soundFile: wineglassDing
  },
  {
    frame: 1435,
    action: "playSound",
    soundFile: wineglassDing
  },
  { frame: 1460, action: "pause" },
  {
    frame: 1465,
    action: "updateText",
    title: "Code Broken",
    details:
      "These early computers helped the Allies defeat the Nazis and laid the foundations for modern computing."
  },
  {
    frame: 1475,
    action: "playSound",
    soundFile: stamp
  },
  {
    frame: 1490,
    action: "playSound",
    soundFile: winTone
  }
];
