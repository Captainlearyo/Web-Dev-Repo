/***********************************************************************
You are given a recursive function, `printLettersBetween()`, that takes
a start and end letter and prints all the letters between them in order.
If the start letter comes before the end letter in the alphabet, the letters
should print out in alphabetical order.  Otherwise, it should print in reverse
alphabetical order. You are given an array of letters in the aplphabet to work
with for this problem.

The code is almost working but unfortunately, there are a few bugs. Use
the debugging skills you've been practicing and the VSCode debugger to
identify and solve the bugs.

Examples:

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

printLettersBetween(alphabet, "a", "c");
// a
// b
// c

printLettersBetween(alphabet, "f", "d");
// f
// e
// d

printLettersBetween(alphabet, "g", "g");
// g

***********************************************************************/

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function printLettersBetween(alphabet, startLetter, endLetter) {


  // Print the letter
  console.log(startLetter);

  // Base Case: Stop the program when startLetter equals endLetter
  if (startLetter === endLetter) {
    return;
  }

  // If the starting letter is after than the ending
  // letter, decrease the index by one. Otherwise, increase
  // the index by one.
  if (alphabet.indexOf(startLetter) > alphabet.indexOf(endLetter)) {
    startLetter = alphabet[alphabet.indexOf(startLetter) - 1];
  } else {
      startLetter = alphabet[alphabet.indexOf(startLetter) + 1];
  }

  // Make a recursive call with the modified letter.
  printLettersBetween(alphabet, startLetter, endLetter);
}



printLettersBetween(alphabet, "a", "c");
// a
// b
// c

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printLettersBetween;
} catch {
  module.exports = null;
}
