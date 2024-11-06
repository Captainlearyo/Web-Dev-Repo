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

function countCharacters(string) {
	let count = {}
	for (let i = 0; i < string.length; i++) {
		let letter = string[i]
		if(count[letter]) {
			count[letter] +=1
		}else{
			count[letter] =1
		}

	}
	console.log(count)
	return count
}


function duplicateCharMinCount(string, minCount) {
	let highKeys = []
	let count = countCharacters(string)
	for(let key in count){
		if(count[key] >= minCount){
			highKeys.push(key)
		}
	}
	console.log (highKeys)
	return highKeys
}

duplicateCharMinCount("apple", 2) // ["p"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
