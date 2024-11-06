const assert = require('assert');

const salesCommission = require('../problems/03-sales-commission.js');

describe('salesCommission()', function() {
    it('should return the total amount of commission earned by all team members', function() {

      salespeople = [
        { name: "Susan", largestSale: 3000 },
        { name: "Brianna", largestSale: 20000 },
        { name: "Dwayne", largestSale: 13000 },
        { name: "Delilah", largestSale: 26000 },
        { name: "Fernando", largestSale: 8000 },
      ];

        assert.deepStrictEqual(salesCommission(salespeople), 6100)

    });

    it('should give a $500 base commmission to anyone who does not close a sale of $15,000 or more', function() {

        salespeople = [{name: "Billy", largestSale: 1000}]

        assert.deepStrictEqual(salesCommission(salespeople), 500)

    });

});
