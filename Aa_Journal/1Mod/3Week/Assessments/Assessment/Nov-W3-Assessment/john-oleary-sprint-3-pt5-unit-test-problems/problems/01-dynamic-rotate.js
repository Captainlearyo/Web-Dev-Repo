/***********************************************************************
Write a function named `dynamicRotate(num)`. When invoked, the
`dynamicRotate` function will accept a number to be used as the
rotation amount and return a function. Positive numbers rotate
the array to the right and negative numbers rotate to the left.

The function returned by `dynamicRotate` will accept an array to
be rotated by the amount provided when `dynamicRotate` was
first invoked. It will return the original array mutated by
the given rotation.

Examples:

```js
let arr = ['a', 'b', 'c', 'd', 'e'];
rotateRightTwo = dynamicRotate(2);
rotateRightTwo(arr);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotateLeftOne = dynamicRotate(-1);
rotateLeftOne(animals)
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
```
***********************************************************************/
function dynamicRotate(num) {
  debugger
 if(num > 0)
 return function(arr){
  for(let i = 0; i < num; i++) {
    arr.unshift(arr.pop());
  }
}
if(num < 0){
return function(arr){
  for(let i = 0; i < -(num); i++) {
    arr.push(arr.shift());
  }
 }
}
 console.log(arr)
return arr
}


// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotateRightTwo = dynamicRotate(2);
// rotateRightTwo(arr);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotateLeftOne = dynamicRotate(-1);
rotateLeftOne(animals)
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicRotate;
} catch {
  module.exports = null;
}
