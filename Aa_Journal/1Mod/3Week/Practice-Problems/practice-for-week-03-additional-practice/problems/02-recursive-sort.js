/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/

let nums = [14, 5, 10, 6, 3, 4, 21, 16, 9]

function sort(nums, newArr = []) {
if(nums.length){
let smallest = Math.min(...nums);
let smallIdx = nums.indexOf(smallest);
newArr.push(smallest)
nums.splice(smallIdx, 1);
//console.log(newArr)
return sort(nums, newArr)
}
return newArr
}

console.log(sort(nums))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}
