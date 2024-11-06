// Week 1 - Thursday
//Lecture notes 10/27/22

//Helper Functions
/*
//pickPrimes
letisEvan = function(num){
    return num % 2 === 0;
};

let extractEvens = function(numbers) {
    let evens = [];
    for
}
*/

//A B

// let b = function() {
//     console.log('starting b');
//     console.log('ending b');
// }

// let a = function() {
//     console.log('starting a')
//     b();
//     console.log('ending a')
// }
// a();
// */

  // Array Splice Method
/*
  let colors = ["red", "yellow", "blue", "green", "black", "beige"];
let removed = colors.splice(2, 3, "Gainsboro", "Ivory", "Khaki");
console.log(colors); // [ 'red', 'yellow', 'Gainsboro', 'Ivory', 'Khaki', 'beige' ]
console.log(removed); // [ 'blue', 'green', 'black' ]
*/

//Split and Join Methods
/*
let str = "I don't know what I want to eat";
let newStr = str.split("I").join("we");
console.log(newStr); // 'we don't know what we want to eat'
*/

//Non-Standard For-Loops
/*
const dishes = [0, 1, 2];

function cleanDishes() {
    // Clean last dish by deleting it from array
    for (let i = dishes.length - 1; i >= 0; i--) {
        // This line is deleting 1 item from the array starting from index `i`
        dishes.splice(i, 1);
    }
}
*/

//Testing Your Code - Unit Tests
 // Array sum
 /
 let sumArray = function(arr){
    let sum = 0;
    for ( let i = 0; i < arr.length; i ++){
      sum += (arr[i]);
    }
         return sum;
  }

//   console.log(sumArray([4, 3, -1, 10])); // 16
//   console.log(sumArray([6, 7, 2])); // 15
//   console.log(sumArray([])); // 0

//
let avgVal = function(arr){
    let avg = 0;
    for ( let i=0; i < arr.length; i--){
    avg += (arr[i])
    }
  return avg;
  }





  console.log(avgVal([5, 10])); // 7.5
  console.log(avgVal([3, 7, 2, 1, 2])); // 3
  console.log(avgVal([])); // null
  */
 //Max Value

  let maxValue = function(nums){
    let largest = [0]

    if (nums.length === 0){
      return null;
    }
    for(let i =0; i<nums.length; i++){
      if(nums[i]>largest){
       largest = nums[i]
      }
    }
    return largest
  }




  // console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
  // console.log(maxValue([-2, -3, -7, 3 ])); // 3
  // console.log(maxValue([])); // null

//??
  // let letters = Array.from(word);
//   if (/[aeiou]/gi.test(letters)) {

  function getAverage(nums) {
    let = sum = 0
    for (let i = 0; i < nums.length; i++)
        sum += nums[i]
      return sum/nums.length
