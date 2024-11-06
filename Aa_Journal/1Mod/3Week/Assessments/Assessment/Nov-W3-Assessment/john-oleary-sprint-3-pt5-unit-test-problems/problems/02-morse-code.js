/***********************************************************************
Write a function `morseCode` that takes an array containing a series
of either 'dot' or 'dash' strings. Your function should `console.log`
each string in order, followed by a pause of 100ms after each `dot`
and 300ms after each `dash`.

Note: You must use a recursive approach to solve this problem.

Example:

let code = ['dot', 'dash', 'dot'];

morseCode(code);
// print 'dot'
// pause for 100ms
// print 'dash'
// pause for 300ms
// print 'dot'
// pause for 100ms

***********************************************************************/

function morseCode(code) {
  if(code.length){
    // console.log(code[0])
 if(code[0] === 'dot'){ console.log('dot')
     setTimeout(() =>{morseCode(code.slice(1))}, 100 )
 }
 if(code[0] === 'dash'){ console.log ('dash')
      setTimeout(() =>{morseCode(code.slice(1))}, 300 )
 }
}
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = morseCode;
} catch {
  module.exports = null;
}
