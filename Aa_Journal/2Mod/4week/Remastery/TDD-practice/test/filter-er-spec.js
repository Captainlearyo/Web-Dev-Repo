const chai = require('chai');
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const chooseyEndings = require("../filter-er");


describe("chooseyEndings()", () => {
    it("should return ['abc', 'ccc'] ", () => {
      expect(chooseyEndings(['er', 'abc' , 'ccer', 'ccc'])).to.eql(['abc','ccc']);
    });
  });
