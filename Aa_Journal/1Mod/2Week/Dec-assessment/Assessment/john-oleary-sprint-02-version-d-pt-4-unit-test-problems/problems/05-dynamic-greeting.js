/***********************************************************************
Write a function called `dynamicGreeting(greeting)`. The dynamicGreeting
function will return a new function that will allow us to create new separate
custom greeting functions.

EXAMPLES:

const goodMorning = dynamicGreeting('Good Morning, '); // returns a function
console.log(goodMorning('Jane'));
// 'Good Morning, Jane'

const byeBye = dynamicGreeting('See you later, '); // returns a function
console.log(byeBye('Bob'));
// 'See you later, Bob'

const goodDog = dynamicGreeting("Who's a good dog, "); // returns a function
console.log(goodDog('Fido'));
// 'Who's a good dog, Fido'
***********************************************************************/

function dynamicGreeting(greeting) {
  // Your code here
  return function(newGreeting){
  return greeting + newGreeting
  }
}
const goodMorning = dynamicGreeting('Good Morning, '); // returns a function
console.log(goodMorning('Jane'));
// 'Good Morning, Jane'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicGreeting;
} catch (e) {
  module.exports = null;
}
