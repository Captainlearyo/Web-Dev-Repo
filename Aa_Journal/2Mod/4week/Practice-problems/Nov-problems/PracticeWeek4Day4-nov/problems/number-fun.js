function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if(n > 1000000 || n < 1){
    throw new TypeError
  }
  return 1/n
}

module.exports = {
  returnsThree,
  reciprocal
};
