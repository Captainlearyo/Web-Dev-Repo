ageSort = (users) => users.sort((a,b) =>  a.age - b.age)

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a,b) => {
    if ((a + b) % 2 === 0) return a - b
    else if (a % 2 === 0) return 1
    return -1
  })

  let oddsArray = [];
  let evensArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evensArray.push(arr[i]);
    else oddsArray.push(arr[i]);
  }

  let sortedOdd = oddsArray.sort((a,b) => a - b);
  let sortedEven = evensArray.sort((a,b) => a - b);

  return [...sortedOdd, ...sortedEven];
}

validAnagrams = (s, t) => s.split("").sort().join("") === t.split("").sort().join("")


function reverseBaseSort(arr) {
  // Your code here
  // console.log(arr);
  return arr.sort((a, b) => {
    let logA = Math.floor(Math.log10(a));
    let logB = Math.floor(Math.log10(b));

    if (logA === logB) return a - b;
    else return logB - logA;
  });
}

function frequencySort(arr) {
  let count = {}
  for(let key of arr){
    if(key in count) count[key] += 1
    else count[key] = 1
  }
  // console.log(count);
  return arr.sort((a,b) =>{
    // console.log(a, count[a], b, count[b]);
    if(count[a] === count[b]) return b - a
    // if(count[a] > count[b]) 1

    // else return - 1
    return count[a] - count[b];

  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
