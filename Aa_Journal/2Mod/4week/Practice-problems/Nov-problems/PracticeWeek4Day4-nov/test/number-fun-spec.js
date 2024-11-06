// Your code here
const chai = require("chai");
const expect = chai.expect;

const { returnsThree, reciprocal } = require("../problems/number-fun.js");

describe("returnsThree", () => {
    it("message", () => {
        expect(returnsThree()).to.be.equal(3);
    })

});

describe("reciprocal", () => {
    it("out of range",() => {
        expect(() => reciprocal(100000)).to.throw(TypeError)
    })
    it("num",() => {
        expect(reciprocal(4)).to.be.equal(1/4);
    })
    it("num",() => {
        expect(reciprocal(3)).to.be.equal(1/3);
    })
    it("num",() => {
        expect(reciprocal(1)).to.be.equal(1/1);
    })
});
