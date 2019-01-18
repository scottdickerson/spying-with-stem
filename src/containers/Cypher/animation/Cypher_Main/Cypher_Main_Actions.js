import airyStick from "../../../../sounds/airy_stick.mp3";
import paperWriteShort from "../../../../sounds/paper_write_short.mp3";
import paperWriteLong from "../../../../sounds/paper_write_long.mp3";
import envelope from "../../../../sounds/envelope.mp3";
import pistol from "../../../../sounds/pistol.mp3";
import button from "../../../../sounds/button_chime.mp3";
import swooshSlow from "../../../../sounds/swoosh_slow.mp3";
import typeWriterShort from "../../../../sounds/Typewriter_short.mp3";
import typeWriterDing from "../../../../sounds/typewriter_ding.mp3";
import winTone from "../../../../sounds/win_tone.mp3";

export default [
  // Start the script
  {
    frame: 0,
    action: "updateText",
    title: "Cyphers",
    details:
      "Cyphers are one of the oldest methods of encryption. Each letter of the alphabet is replaced by a symbol. "
  },
  {
    frame: 35,
    action: "playSound",
    soundFile: paperWriteShort
  },
  { frame: 68, action: "pause" },
  {
    frame: 107,
    action: "playSound",
    soundFile: paperWriteLong
  },
  {
    frame: 102,
    action: "updateText",
    title: "Cyphers",
    details:
      "During the Civil War, Spies like Rose Greenhow used cyphers to send secret messages. "
  },
  {
    frame: 140,
    action: "playSound",
    soundFile: paperWriteLong
  },
  {
    frame: 265,
    action: "playSound",
    soundFile: airyStick
  },
  {
    frame: 290,
    action: "pause"
  },
  // The letter has been sent
  {
    frame: 302,
    action: "updateText",
    title: "Break the Code!",
    details: "To break a cypher - use frequency analysis"
  },
  // Caught the letter
  {
    frame: 304,
    action: "playSound",
    soundFile: pistol
  },
  {
    frame: 305,
    action: "pause"
  },

  // Wait for them to touch it to open the envelope
  {
    frame: 310,
    action: "playSound",
    soundFile: envelope
  },
  {
    frame: 335,
    action: "updateText",
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
    frame: 410,
    action: "playSound",
    soundFile: button
  },

  {
    frame: 458,
    action: "playSound",
    soundFile: button
  },
  { frame: 560, action: "pause" },
  // Compare the frequency symbols
  {
    frame: 564,
    action: "updateText",
    title: "Break the Code!",
    subTitle: "Step 2",
    details:
      "Compare the frequency of symbols to the frequency of letter in English. "
  },
  {
    frame: 567,
    action: "playSound",
    soundFile: swooshSlow
  },
  // Type the replacements
  {
    frame: 630,
    action: "pause"
  },
  {
    frame: 634,
    action: "updateText",
    title: "Break the Code!",
    subTitle: "Step 3",
    details: "Replace each symbol with a matching letter. "
  },
  {
    frame: 635,
    action: "playSound",
    soundFile: typeWriterShort
  },
  {
    frame: 712,
    action: "playSound",
    soundFile: typeWriterDing
  },
  // Decrypted the letter
  {
    frame: 715,
    action: "pause"
  },
  {
    frame: 762,
    action: "playSound",
    soundFile: winTone
  },
  {
    frame: 763,
    action: "updateText",
    title: "Code Broken",
    details: "Information from broken codes helped win battles. "
  }
];
