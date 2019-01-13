import lowWhoosh from "../../../../sounds/whooshLow.mp3";
import airyStick from "../../../../sounds/airy_stick.mp3";
import paperWriteShort from "../../../../sounds/paper_write_short.mp3";
import paperWriteLong from "../../../../sounds/paper_write_long.mp3";
import envelope from "../../../../sounds/envelope.mp3";
import pistol from "../../../../sounds/pistol.mp3";
import button from "../../../../sounds/button_chime.mp3";
import swooshSlow from "../../../../sounds/swoosh_slow.mp3";
import typeWriterShort from "../../../../sounds/Typewriter_short.mp3";
import typeWriterDing from "../../../../sounds/typewriter_ding.mp3";
import stamp from "../../../../sounds/stamp.mp3";
import winTone from "../../../../sounds/win_tone.mp3";

export default [
  // Start the script
  {
    frame: 35,
    action: "playSound",
    soundFile: paperWriteShort
  },
  {
    frame: 100,
    action: "updateText",
    title: "Cyphers",
    details:
      "During the Civil War, Spies like Rose Greenhow used cyphers to send secret messages. "
  },
  {
    frame: 107,
    action: "playSound",
    soundFile: paperWriteLong
  },
  {
    frame: 140,
    action: "playSound",
    soundFile: paperWriteLong
  },
  {
    frame: 183,
    action: "playSound",
    soundFile: envelope
  },
  {
    frame: 265,
    action: "playSound",
    soundFile: airyStick
  },
  {
    frame: 304,
    action: "pause",
    title: "Break the Code!",
    details: "To break a cypher - use frequency analysis"
  },
  {
    frame: 304,
    action: "playSound",
    soundFile: pistol
  },
  // Wait for them to touch it to open the envelope
  {
    frame: 305,
    action: "playSound",
    soundFile: envelope
  },
  {
    frame: 335,
    action: "pause",
    title: "Break the Code!",
    subTitle: "Step 1",
    details: "Count how often each symbol is used. "
  },
  // Start decrypting the letter
  {
    frame: 373,
    action: "playSound",
    soundFile: button
  },
  {
    frame: 373,
    action: "playSound",
    soundFile: swooshSlow
  },
  {
    frame: 410,
    action: "playSound",
    soundFile: button
  },
  {
    frame: 410,
    action: "playSound",
    soundFile: swooshSlow
  },
  {
    frame: 458,
    action: "playSound",
    soundFile: button
  },
  {
    frame: 458,
    action: "playSound",
    soundFile: swooshSlow
  },
  {
    frame: 562,
    action: "pause",
    title: "Break the Code!",
    subTitle: "Step 2",
    details:
      "Compare the frequency of symbols to the frequency of letter in English. "
  },

  // Compare the symbols
  {
    frame: 563,
    action: "playSound",
    soundFile: lowWhoosh
  },
  // Type the replacements
  {
    frame: 632,
    action: "pause",
    title: "Break the Code!",
    subTitle: "Step 3",
    details: "Replace each symbol with a matching letter. "
  },
  {
    frame: 633,
    action: "playSound",
    soundFile: typeWriterShort
  },

  // Decrypted the letter
  {
    frame: 719,
    action: "playSound",
    soundFile: typeWriterDing
  },
  {
    frame: 738,
    action: "playSound",
    soundFile: stamp
  },
  {
    frame: 762,
    action: "playSound",
    soundFile: winTone
  },
  {
    frame: 800,
    action: "updateText",
    title: "Code Broken",
    details: "Information from broken codes helped win battles. "
  }
];
