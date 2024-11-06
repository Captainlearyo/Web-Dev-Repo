console.log('test')
function myMap(inputArray, callback) {
  // Your code here
  let outputArray = []
  for(let i = 0; i < inputArray.length; i++){
    outputArray.push(callback(inputArray[i]))
  }
 console.log(outputArray)
  return outputArray;
}

module.exports = myMap;

const inputArray = [1, 2, 3];
const callback = (el) => el * 2;

console.log(inputArray);
console.log(myMap(inputArray, callback));
