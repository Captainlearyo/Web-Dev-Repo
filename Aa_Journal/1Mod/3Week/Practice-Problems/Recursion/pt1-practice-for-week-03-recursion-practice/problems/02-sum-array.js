/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(arr) {
  if(arr.length===0) return 0;

  return arr[0] +sumArray(arr.slice(1))
}
console.log(sumArray([1, 2, 3])); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
/*
sumArr([1,2,3]) => 1 + func([2,3])
sumArr([2,3]) => 2 + func([3])
sumArr([3]) => 3 + func([])
sumArr([]) => return 0
sumArr([3]) => 3 + 0 => 3
sumArr([2,3]) => 2 + 3 => 5
sumArr([1,2.3]) => 1 + 5 => 6
*/

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
