const assert = require("assert");

const dynamicGreeting = require("../problems/05-dynamic-greeting.js");

describe("dynamicGreeting()", function() {
  it("should return a function that accepts a name string", function() {
    const goodMorning = dynamicGreeting('Good Morning, ');
    assert.equal(goodMorning('Jane'), 'Good Morning, Jane');
  });

  it("should return a new greeting function for each initial argument", function() {
    
    const byeBye = dynamicGreeting('See you later, ');
    const goodDog = dynamicGreeting("Who's a good dog, ");
    assert.equal(byeBye('Bob'), 'See you later, Bob');
    assert.equal(goodDog('Fido'), "Who's a good dog, Fido");
  });
});
