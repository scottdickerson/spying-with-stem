Some rudimentary testing shows that 'long' animation files (lots of frames / entire 'sequence' for a component) are more performant that short ones (only loads assets once I guess.)

So the current plan is to have a .json animation file for each 'section'(Main / Right) and control playback via code. playSegments looks like the method to use.

Animation will supply a list of segments. For Cypher, they are:

section intro: 0, 235
decode first glyph: 236, 485
decode second glyph: 486, 677
decode third glyph:  678, 867
decode remaining glyphs: 868, 1065

Hopefully we can trigger sounds by supplying the name/path of a sound file and the frame to trigger it on. EG.

/sounds/whoosh.wav  115
/sounds/pop.wav     135.


As of 12-01-18 there are issues with both of the animation exports for Cypher. Debugging is in-process and basically consists of me stumbling into various things that Lottie doesn't understand and then reanimating them in a way that it does. The process should speed up as I learn exactly how to feed it.