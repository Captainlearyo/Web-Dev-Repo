function binaryToString(binaryBlob) {
  console.log(binaryBlob.slice(0,8));
let str = ''
  for (let i = 0; i < binaryBlob.length; i += 8) {
    const first8 = binaryBlob.slice(i,i + 8)
    const asciiCode = parseInt(first8, 2)
    const asciiChar = String.fromCharCode(asciiCode)
    str += asciiChar
  }
  return str;
}
// function binaryToArray(blob, arr = []) {
//   if (!blob.length) return arr;
//   arr.push(blob.slice(0, 8));
//   return binaryToArray(blob.slice(8), arr);

// }


/* Comment in the code below to run local tests */
 console.log(binaryToString('010000010100001001000011')); // 'ABC'
console.log(binaryToString('001101100011011100111000')); // '678'

module.exports = binaryToString;
