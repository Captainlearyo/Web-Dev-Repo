/***********************************************************************
Write a recursive function called `shortestToLongest` which takes
an array of lowercase strings and returns them sorted from shortest
to longest.

Strings of equal length should be sorted alphabetically.

(Hint: str1 < str2 will return true if str1 comes before str2
alphabetically)

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the shortest string in the `strings` array to the end of `sorted`.


// Examples:

// Sorts strings from shortest to longest
let strings1 = ["abc", "de", "", "f", "ghijk", "lmno"]
shortestToLongest(strings1);
// ['', 'f', 'de', 'abc', 'lmno', 'ghijk']


// Accepts a pre-sorted default parameter
let strings2 = ["pomegranate", "persimmon", "peach"];
let sorted = ["pea", "pear"];
shortestToLongest(strings2, sorted);
// ['pea', 'pear', 'peach', 'persimmon', 'pomegranate']


// Sorts strings of the same length alphabetically
let strings3 = ["dog", "cat", "elephant", "ant", "pig", "emu"];
shortestToLongest(strings3);
// ['ant', 'cat', 'dog', 'emu', 'pig', 'elephant']

***********************************************************************/

function shortestToLongest(strings, sorted = []) {
  let smallestVal = 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
  smallIdx = 0
  debugger
  if(strings.length ){
  for(let i = 0; i < strings.length; i ++ ){
    debugger
      if( strings[i].length < smallestVal.length || strings[i] < smallestVal){
        //strings[i].length < smallestVal.length
        smallestVal = strings[i]
        smallIdx = strings.indexOf(strings[i])
      }
    }
    sorted.push(smallestVal)
    //let smallIdx = strings.indexOf(smallestVal)
    strings.splice(smallIdx, 1);
    console.log(smallestVal)
    return shortestToLongest(strings, sorted)
    }
    return sorted
  }

//  let strings3 = ['ant', 'cat', 'dog', 'emu', 'pig', 'elephant']
//  shortestToLongest(strings3);

   // let strings1 = ["abc", "de", "", "f", "ghijk", "lmno"]
//shortestToLongest(strings1);

// ['', 'f', 'de', 'abc', 'lmno', 'ghijk']
  // 1. Find the shortest string in the `strings` array

  // 2. Remove the shortest string from the `strings` array

  // 3. Push the shortest string to the back of the `sorted` array

  // 4. Recurse until the `strings` array is empty (base case)

  // Your code here




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = shortestToLongest;
} catch {
  module.exports = null;
}
