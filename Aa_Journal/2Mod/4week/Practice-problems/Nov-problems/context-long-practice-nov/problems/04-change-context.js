function changeContext(func, obj) {
  console.log(func.bind(obj))
  return func.call(obj)
}

// let map = {
//   secret: "I don't know where I'm going",
// };

// let bat = {
//   secret: "I'm scared of the dark",
// };

// function getSecret() {
//   return this.secret;
// }
// console.log(changeContext(getSecret, bat))
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
