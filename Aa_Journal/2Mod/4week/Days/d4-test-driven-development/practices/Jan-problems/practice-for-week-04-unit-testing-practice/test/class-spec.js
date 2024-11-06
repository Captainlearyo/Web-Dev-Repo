const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {

const word = new Word('apple')


  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("apple");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal("ppl");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal("ae");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin()).to.equal("appleyay");
    });
  });
});
