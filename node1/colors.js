import colors from "colors";

const jakisTekst = "Jakis Tekst";
export const kolorowyTekst = () => {
  console.log("hello".green); // outputs green text
  console.log("i like cake and pies".underline.red); // outputs red underlined text
  console.log("inverse the color".inverse); // inverses the color
  console.log("OMG Rainbows!".rainbow); // rainbow
  console.log("OMG Rainbows!OMG Rainbows!".rainbow); // rainbow
  console.log(`Run the trap ${jakisTekst}\n\n`.trap); // Drops the bass
};

// text colors
// black
// red
// green
// yellow
// blue
// magenta
// cyan
// white
// gray
// grey

// bright text colors
// brightRed
// brightGreen
// brightYellow
// brightBlue
// brightMagenta
// brightCyan
// brightWhite

// background colors
// bgBlack
// bgRed
// bgGreen
// bgYellow
// bgBlue
// bgMagenta
// bgCyan
// bgWhite
// bgGray
// bgGrey

// bright background colors
// bgBrightRed
// bgBrightGreen
// bgBrightYellow
// bgBrightBlue
// bgBrightMagenta
// bgBrightCyan
// bgBrightWhite

// styles
// reset
// bold
// dim
// italic
// underline
// inverse
// hidden
// strikethrough
// extras

// rainbow
// zebra
// america
// trap
// random