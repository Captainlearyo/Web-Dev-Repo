
const chai = require('chai');
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const NumberFun = require("../number-fun");

describe("NumberFun", () => {

  let numFun1;
  let num = 3

   beforeEach(() => {
    numFun1 = new NumberFun(num);
  });

describe("returnNum()", () => {
  it("should return num", () => {
    expect(numFun1.returnNum(num)).to.eq(num);
  });
});

describe("addNum()", () => {
  it("should return num +1", () => {
    expect(numFun1.addNum(num)).to.eq(num ++);
  });
});

describe("subtractNum()", () => {
  it("should return num -1", () => {
    expect(numFun1.subtractNum(num)).to.eq(num --);
  });
});

describe("multiplyNum()", () => {
  it("should return num*2", () => {
    expect(numFun1.multiplyNum(num)).to.eq(num * 2);
  });
});

describe("divideNum()", () => {
  it("should return num/2", () => {
    expect(numFun1.divideNum(num)).to.eq(num / 2);
  });
});
});
