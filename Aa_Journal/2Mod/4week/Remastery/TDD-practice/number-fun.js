

class NumberFun{
  constructor(num){
    this.num = num
  }
  returnNum() {
    return this.num;
  }

  addNum() {
    return this.num++;
  }

  subtractNum() {
    return this.num--;
  }

  divideNum() {
    return this.num / 2;
  }

  multiplyNum() {
    return this.num * 2;
  }
}
module.exports = NumberFun;
