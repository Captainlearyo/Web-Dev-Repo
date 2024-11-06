/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/


function duplicateCharMinCount(string, minCount) {
	let obj = {};
  for( let letter of string){
   if(letter in obj) {
	 obj[letter] += 1
   } else {
	 obj[letter] = 1

		   }
	  }
	console.log(obj)


	 let highKeys = []
	for(let key in obj){
	  if(obj[key] >= minCount) {
	  highKeys.push(key)
	  }
	}
	console.log (highKeys)
	return highKeys;
  }




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
