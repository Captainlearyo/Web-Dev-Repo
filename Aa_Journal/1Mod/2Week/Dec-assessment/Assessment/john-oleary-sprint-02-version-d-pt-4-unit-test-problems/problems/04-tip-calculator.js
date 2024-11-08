/***********************************************************************
Write a function using fat arrow syntax, `tipCalculator` that takes in an
arbitrary number of arguments as prices, adds them up and returns a string
containing the recommended tip following this format:
"Cost: $x.xx, Recommended Tip: $x.xx".
Use a tip percentage of 23%.

Hint: Look up `toFixed()` on MDN

Examples:

console.log(tipCalculator(25, 35));
// 'Cost: $60.00, Recommended Tip: $13.80'
console.log(tipCalculator(2.50, 2.50, 4.95, 5.75));
// 'Cost: $15.70, Recommended Tip: $3.61'
console.log(tipCalculator(6.99, 8.99, 29.99));
// 'Cost: $45.97, Recommended Tip: $10.57'
***********************************************************************/

// Your code here
const tipCalculator =(...prices) =>{
let cost = 0
let tip =0
for (let i = 0; i < prices.length; i++) {
  cost += prices[i]
  tip += prices[i] * .23

}


return `Cost: $${cost.toFixed(2)}, Recommended Tip: $${tip.toFixed(2)}`
}
console.log(tipCalculator(25, 35));
// 'Cost: $60.00, Recommended Tip: $13.80'
console.log(tipCalculator(2.50, 2.50, 4.95, 5.75));
// 'Cost: $15.70, Recommended Tip: $3.61'
console.log(tipCalculator(6.99, 8.99, 29.99));
// 'Cost: $45.97, Recommended Tip: $10.57'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// Try catch for assessment purposes only.  Not normal practice.
try {
  module.exports = tipCalculator;
} catch (e) {
  module.exports = null;
}
