const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const myMap = require("../problems/my-map")

describe("myMap", () => {
 let inputArray;
beforeEach(() => {
   inputArray = [1, 2, 3];
});

it('should return an array',() => {
    expect(myMap(inputArray, () => {})).to.be.an.instanceOf(Array);
})

it('should not mutate input array',() => {
    expect(inputArray).to.deep.equal([1,2,3])
});

it("should not call the built in map", () => {
    
});
});
