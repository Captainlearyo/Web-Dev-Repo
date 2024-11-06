const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const printLettersBetween = require("../problems/04-print-letters-between.js");

describe("printLettersBetween()", function() {
  afterEach(function() {
    chai.spy.restore(global);
  });

  it("should print letters in alphabetical order and in reverse alphabetical order", function() {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let setConsoleLogSpy = chai.spy.on(console, "log");

    printLettersBetween(alphabet, "a", "c");

    expect(setConsoleLogSpy).to.have.been.called.nth(1).with("a");
    expect(setConsoleLogSpy).to.have.been.called.nth(2).with("b");
    expect(setConsoleLogSpy).to.have.been.called.nth(3).with("c");

    printLettersBetween(alphabet, "f", "d");

    expect(setConsoleLogSpy).to.have.been.called.nth(4).with("f");
    expect(setConsoleLogSpy).to.have.been.called.nth(5).with("e");
    expect(setConsoleLogSpy).to.have.been.called.nth(6).with("d");
  });

  it("should be able to handle cases in which the startLetter and endLetter are equal", function() {
    
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let setConsoleLogSpy = chai.spy.on(console, "log");

    printLettersBetween(alphabet, "g", "g");

    expect(setConsoleLogSpy).to.have.been.called.nth(1).with("g");
  });
});
