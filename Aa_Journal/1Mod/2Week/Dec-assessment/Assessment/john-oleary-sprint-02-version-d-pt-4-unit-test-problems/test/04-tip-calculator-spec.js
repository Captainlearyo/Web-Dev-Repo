const assert = require('assert');

const tipCalculator = require('../problems/04-tip-calculator.js');

describe('tipCalculator()', function() {
    it('should a return a string with cost and a 23% tip for a collection of integer prices', function() {

        assert.strictEqual(tipCalculator(25, 35), 'Cost: $60.00, Recommended Tip: $13.80')

    });

    it('should a return a string with cost and a rounded 23% tip for a collection of floating point prices', function() {

        assert.strictEqual(tipCalculator(2.50, 2.50, 4.95, 5.75), 'Cost: $15.70, Recommended Tip: $3.61')
        assert.strictEqual(tipCalculator(6.99, 8.99, 29.99), 'Cost: $45.97, Recommended Tip: $10.57')
        
    });

    it('should be an arrow function', function() {
		const isArrowFn = (fn) => (typeof fn === 'function') && /^[^{]+?=>/.test(fn.toString());
		assert.equal(isArrowFn(tipCalculator), true)
	})
});
