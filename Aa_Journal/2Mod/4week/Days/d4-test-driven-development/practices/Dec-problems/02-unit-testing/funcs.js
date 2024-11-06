
function isFive(num) {
  return num === 5
}

function isOdd(number) {
  // Your code here
  if(typeof number !== 'number'){
    throw new TypeError
  }
  return (number % 2) !== 0
}

function myRange(min, max, step = 1) {
  // Your code here
  let newArr =[]
 for (let i = min; i <= max; i += step) {
 newArr.push(i)
 }
 return newArr
}


module.exports = { isFive, isOdd, myRange };
