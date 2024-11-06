
//Monday 11/18/22
// Return average
/*
function averageOfFour() {
    var sum = 0
    var bor = 0
    for(let i =0; i < arguments.length; i++){
    sum += arguments[i]
      bor ++
    }

    return sum/bor;
  }

  console.log(averageOfFour(3,5,6)); // => 14
  console.log(averageOfFour(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
  console.log(averageOfFour(0)); // => 0
*/
//sum array
/*
function sumArray(array) {
  let sum = 0
    for(let i = 0; i < array.length; i += 1){
      sum += array[i]
      //console.log(sum)
    }
   return sum
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
*/

//Add Arryy
/*
function combineArray(array1, array2) {
    // let arr1 = [...array1]
    // let arr2 = [...array2]
    // let arr3 = [...array1, ...array2]
    //   return arr3

    let bor = array1.concat(array2)
  return bor

  }
  */
// Is Substring
/*
  function isSubstring(searchString, subString) {
    let newSearchString = searchString.toLowerCase()
    let newSubString = subString.toLowerCase()
    if (newSearchString.indexOf(newSubString) === -1){
      return false}
      else{

        return true
      }
      // return lowerSearchStr.indexOf(lowerSubStr) !== -1;

    }

    console.log(isSubstring("The cat went to the store", "he cat went")); // => true
    console.log(isSubstring("Time to program", "time")); // => true
    console.log(isSubstring("Jump for joy", "joys")); // => false
*/

//Doubler
/*
function doubler(numbers) {
    let doubledNums = [];

   for ( let i = 0; i < numbers.length; i++){
       doubledNums.push(numbers[i] * 2)
    //console.log(doubledNums)
    }
  return doubledNums

  }

  console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
  console.log(doubler([7, 1, 8])); // => [14, 2, 16]
*/
/*function doubler(numbers) {
  let doubledNums = [];

 for ( let i = 0;i < numbers.length; i++){
    let newNum = numbers[i] * 2;
    doubledNums = doubledNums.concat(newNum);

  }

  return doubledNums;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
*/

//String includes
/*
function eitherStringIncluded(sentence, word1, word2) {
    if ( sentence.includes(word1) || sentence.includes(word2)){
        return true
	}
  else{
  return false
  }
}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false
*/

 //pig latin
 /*function pigLatinWord(word) {
    let vowels = ['a','e','i','o','u'];
if(vowels.includes(word[0])){
   return (word+'yay')
}
  for(let i = 0; i < word.length; i ++){
    let con = word[i];
 if (vowels.includes(con)){

           return word.slice(i) + word.slice(0, i) + "ay";
            }

        }

        return word;
}
console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
*/
