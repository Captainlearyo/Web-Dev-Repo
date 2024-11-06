// Your code here
const chai = require("chai");
const expect = chai.expect;
const { reverseString } = require("../problems/reverse-string.js")


describe("reverseString(str)", () => {
    it("message", () => {
        const rStr = reverseString("fun");
        expect(rStr).to.be.equal("nuf");
    });
    it("expecting a string", () => {
        expect(() => reverseString(null)).to.throw(TypeError);
    })
});
