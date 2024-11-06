function reverseString(string) {
  console.log(string);
  if (typeof string !== "string") {
    throw new TypeError();
  } else {
    /*  //   let splStr = string.split('')
  //   let newArr = []

  //   for(let i = splStr.length -1; i >= 0; i--){
  //     newArr.push(splStr[i])
  //   }

  //   return newArr.join('');
  // };
  */

    let newStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
      newStr += string.charAt(i);
    }
    return newStr;
  }
}

module.exports = { reverseString };
