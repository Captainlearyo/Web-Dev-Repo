/***********************************************************************
Write a function `mostFrequentLetter(string)` that takes a
string as an argument and returns the character that appears the
most often. In case of a tie, you may return any of the characters.
The string will have at least one character.

Examples:

console.log(mostFrequentLetter("apple")); // "p"
console.log(mostFrequentLetter("banana")); // "a"
console.log(mostFrequentLetter("What about a longer string?")); // " "
***********************************************************************/

function mostFrequentLetter(string) {
    let obj = {}
     console.log(string)
      for(let letter of string){
       if(letter in obj){
         obj[letter] += 1
         } else {
         obj[letter] = 1
         }
       }
      console.log(obj)
      //let newarr =[]
     let count = -1/0
     let highKey
     for(let key in obj){
       if(obj[key] > count){
         count = obj[key]
         highKey = key
       }
      }

      
      return highKey
     }
     console.log(mostFrequentLetter("apple")); // "p"
console.log(mostFrequentLetter("banana")); // "a"
console.log(mostFrequentLetter("What about a longer string?")); // " "

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentLetter;
} catch (e) {
  module.exports = null;
}
