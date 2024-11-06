const findMinimum = arr => {


  if(arr.length) return Math.min(...arr)
  return undefined


};

const runningSum = arr => {
let sum = 0
let ret = []

for (let i = 0; i < arr.length; i++) {
sum += arr[i]
ret.push(sum)
}
return ret
};

const evenNumOfChars = arr => {
count = 0
for (let i = 0; i < arr.length; i++) {
if(arr[i].length % 2 === 0) count ++
}
return count
};

const smallerThanCurr = arr => {
newArr =[]
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if(arr[i] > arr[j]) count ++
    }
    newArr.push(count)
  }
  //console.log(newArr);
  return newArr
};

const twoSum = (arr, target) => {
for (let i = 0; i < arr.length; i++) {

  for (let j = 0; j < arr.length; j++) {
    if((arr[i] + arr [j]) === target) return true
  }
}
return false
};

const secondLargest = arr => {
  if (arr.length < 2) return undefined;

  let largest = Math.max(arr[0], arr[1]);
  let secondLargest = Math.min(arr[0], arr[1]);

  for (let i = 2 ; i < arr.length ; i++) {

    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }

  }

  return secondLargest;



};




const shuffle = (arr) => {


const copy = [...arr];

  for (let i = 0 ; i < copy.length ; i++) {
    let randomIndex = Math.floor(Math.random() * copy.length);
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }

  return copy;
  //!!END
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
