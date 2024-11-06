// Week 1 - Wednesday

//Lecture notes 10/26/22



//Pig latin
/*
    function pigLatinWord(word) {

            let vowels = ['a','e','i','o','u']
        // let vowels = "aeiou";
          if (vowels.includes(word[0])){
            return word + "yay";
        }

        for (let index = 0; index , index < word.length; index++){
            let letter = word[index];

            if (vowels.includes(letter)){
                let firstPart = word.slice(index);
                let secondPart = word.slice(0, index);
                return firstPart + secondPart + "ay";
            }

        }

        return word;
    };
      console.log(pigLatinWord("apple")); //=> "appleyay"
      console.log(pigLatinWord("eat")); //=> "eatyay"
      console.log(pigLatinWord("banana")); //=> "ananabay"
      console.log(pigLatinWord("trash")); //=> "ashtray"
      console.log(pigLatinWord("zzz")); //=> "zzz"
*/

//Array index of (*)
/*

function wordWithinArray(array, word) {
    let wordi = array.indexOf(word)
if (wordi === -1){
    return false;
}
   return true;
};

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "camel")
); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "panther")
); //=> false
*/

//Echo
/*
    function echo(str) {
        let echostr = str.toUpperCase() + "..." + (str) + "..." + (str.toLowerCase());
       console.log(echostr)
       return echostr;
      }

      echo("Mom!") // => prints "MOM! ... Mom! ... mom!"
      echo("hey") // => prints "HEY ... hey ... hey"
      echo("JUMp") // => prints "JUMP ... JUMp ... jump"
*/

//Function Expression syntax
/*

function sayHello(){
    console.log('hello');
}
sayHello()
*/

//Mutability
/*
   let replaceFirst = function(array, newVal) {
   array[0] = newVal;
}
   let letters = ['a', 'b'];

   console.log(letters);
   replaceFirst(letters, 'x');
   console.log(letters);
   console.log(letters[0]);
   */

//Arry, push, pop, shift, unshift
/*

   let people = ['Rosemary', 'ALex', 'Josh','Polina','David','Anna']

//people.push('kwasi');//push adds to end of element
//people.push('5')
//people.push('sara')
//people.push('jay','Hannah')
//console.log(people)
//people.pop() // removes last element, returns removed element
//people.shift() //removes first element
//console.log(people.unshift('Rose')) //adds element ot beggining
//people.shift([3]) //removes first element

console.log(people)
//console.log(people.pop())
//console.log(people)
//console.log(people[0])
*/

/*
    console.log(people)
    let newPeople =[];
    for (i = 0; i < people.length; i++) {
        let person = people[i];
        let uppercase = person.toUpperCase();
        newPeople.push(uppercase);
        console.log(newPeople);
    }
    */

// Say hello
/*
let sayHello2 = function(){
console.log('hello');
return 'hello'
};
//console.log(sayHello2) //[Function: sayHello2]
conscole.log(sayHello2());
*/

//Nested loops
/*
for(let i = 0; i <= 3; i++){
    console.log(i);
    for (let j = 0; j <= 5; j++){
        console.log('       ' + j);
    }
}
*/
/*
for (let i = 1; i <= 3; i++){
    for (let j = 1; j <= 5; j++){
        console.log(i, j);
    }
}
*/

//Paris in array
/*
let dogs =['belka', 'strelk', 'laika', 'dezik'];

for (let i = 0; i < dogs.length; i++){
    let dog1 = dogs[i];

    for(let j = i +1 ; j < dogs.length; j++){
    let dog2 = dogs[j];
    console.log(dog1, dog2);

}
}
*/
/*
function twoSum(nums, targetSum) {
    for(let i=0; i< nums.length; i++) {
        let num1 = nums[i];
        for (let j = 0; j < nums.length; j++) {
            let num2 = nums=[j];
            //console.log("num1", num1, "num2", num2)
            if(num1 + num2 === targetSum) {
                return true;
            }
        }
    }
    return false
}
twoSum([1,2,3],4);
*/

//Add to Array
/*
function addToArray(location, element, arr) {
    if (location == "FRONT"){
        arr.unshift(element)
        }
        else if(location == "BACK"){
            arr.push(element)
    }
    else (
        console.log('ERROR')
    )
}

testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]
*/

//Remove from Array
/*

function removeFromArray(location, arr) {
    if (location == "FRONT") {
        arr.shift(arr[0]);
    }
        else if (location =="BACK"){
            arr.pop(arr[0]);
        }
        else(console.log('ERROR'))
}

testArray = [0,1,2,3,4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]
*/

//Longest Name - Debugging (*)
/*
function longestName(names) {

    // Set the first name to be the longest
    let currentLongest = names[0];
    // Check each other name in the array starting from the second
    for (let i = 0 ; i < names.length  ; i++) {

        // If the name we're checking is longer than our
        // current longest, set that name to be the new longest
        if (names[i].length > currentLongest.length) {
            currentLongest = names[i];
        }

    }

    return currentLongest;
}

testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
             "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
             "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

console.log(longestName(testNames)); // "Christopher"
*/
// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// //console.log(arr.splice(2,3))
// arr.splice(2, 3);
// console.log(arr);
// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.slice(1, 3);
// console.log(arr);

//Reverse Sting
/*

let reverseString = function(str){

    let reverse = "";
      for(let i = str.length -1; i >= 0; i--){

        reverse += str[i]

      }
      return reverse
    }

    console.log(reverseString('fish')); // 'hsif'
    console.log(reverseString('marathon')); // 'nohtaram'
*/

//Range
/*
let range = function(min, max){
    let array = [];
    for(let i = min; i <= max; i++ ){
array.push(i);

    }
    return array;
}

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []
*/

//logBetweenStepper

// let twoDimensionalProduct = function(array) {
//     let product = 1;

//     for (let i = 0; i < array.length; i++) {
//         let subArr = array[i];
//         for (let j = 0; j < subArr.length; j++) {
//             product *= subArr[j];
//         }
//     }

//     return product;
// };
