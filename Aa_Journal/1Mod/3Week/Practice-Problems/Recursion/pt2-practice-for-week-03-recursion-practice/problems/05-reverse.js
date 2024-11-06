/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
  // base case
debugger
  if(str.length === 0) return '' ;
    debugger

  //recursive step
  return reverse(str.slice(1)) + str[0]
}


console.log(reverse("house")); // "esuoh"
//console.log("house".slice("house".length -1,"house".length))
/*
reverse(house) => e + func(hous)
reverse(house) => es + func(hou)
reverse(house) => esu + func(ho)
reverse(house) => esuo + func(h)
reverse(house) => esuoh + func()
return 0

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
