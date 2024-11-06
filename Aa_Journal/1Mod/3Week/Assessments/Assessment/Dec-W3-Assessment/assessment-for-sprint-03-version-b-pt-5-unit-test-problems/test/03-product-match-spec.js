const assert = require("assert");
const productMatch= require("../problems/03-product-match.js");

describe("productMatch()", function() {

  it("should return true if there is one or more distinct pairs that equal the target product when multiplied together", function() {
    let arr1 = [4, 2, 5, 8];
    let product1 = 16;
    assert.deepStrictEqual(productMatch(arr1, product1), true);

    let arr2 = [8, 1, 9, 3];
    let product2 = 8;
    assert.deepStrictEqual(productMatch(arr2, product2), true);
  })

  it("should not find a product match by multiplying non-distinct numbers from the array", function() {
    let arr = [4, 2, 5, 7];
    let product = 16;
    assert.deepStrictEqual(productMatch(arr, product), false);
  })

  it("should accept a default parameter with a boolean value and change the value of the boolean if needed", function() {
    let arr1 = [3, 4, 6, 2, 5];
    let product1 = 12;
    let bool1 = false;
    assert.deepStrictEqual(productMatch(arr1, product1, bool1), true);

    let arr2 = [3, 4]; // productMatch([3, 4], 12)); // true
    let product2 = 12;
    let bool2 = true;
    assert.deepStrictEqual(productMatch(arr2, product2, bool2), true);    
  });
});
