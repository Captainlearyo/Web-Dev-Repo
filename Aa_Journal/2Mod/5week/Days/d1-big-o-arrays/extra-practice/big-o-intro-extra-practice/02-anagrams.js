function firstAnagram(str1, str2) {
  // Code goes here ....
  let newStr1 = str1.split('')
  let newStr2 = str2.split('')
  for (let letter of newStr1) {
    if(newStr2.indexOf(letter) === -1) return false
    newStr2.splice(newStr2.indexOf(letter), 1)
      console.log(newStr2);

    }

    return true
  }



function secondAnagram(str1, str2) {
  // Code goes here ....
  let newStr1 = str1.split('').sort()
  let newStr2 = str2.split('').sort()
  console.log(newStr1);
  console.log(newStr2);
  return newStr1.join('') === newStr2.join('')
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
  let str1obj = {};
  let str2obj = {};
  str1
  .split('')
  .forEach(el => (el in str1obj ? str1obj[el] +1 : str1obj[el] = 1 ));

  str2
  .split('')
  .forEach(el => (str2obj[el] = (str2obj[el] || 0) + 1));
  console.log(str1obj);
  console.log(str2obj);

  if (Object.keys(str1obj).length === Object.keys(str2obj).length) {
    return Object.keys(str1obj).every(
      (key) =>str2obj.hasOwnProperty(key) && str2obj[key] === str1obj[key]
    );
  }
  return false;
};


function fourthAnagram(str1, str2) {
  // Code goes here ....
}

// console.log(firstAnagram("gizmo", "sally"));// => false
// console.log(firstAnagram("elvis", "lives")); // => true
// console.log(secondAnagram("gizmo", "sally"));// => false
// console.log(secondAnagram("elvis", "lives")); // => true
console.log(thirdAnagram("gizmo", "sally"));// => false
console.log(thirdAnagram("elvis", "lives")); // => true
