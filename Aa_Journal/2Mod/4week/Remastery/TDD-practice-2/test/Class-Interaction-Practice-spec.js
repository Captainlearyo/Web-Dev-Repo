const chai = require('chai');
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Wheels = require("../Class-Interaction-Practice");
const Frame = require("../Class-Interaction-Practice");
const Accessories = require("../Class-Interaction-Practice");

describe('The Wheels class', () => {
    let wheel;

    beforeEach(() => {
        wheel = new Wheels('street', 'metal', 'metal', 'rubber');
    });

    describe('constructor function', () => {

        it('should have a name property', () => {
            expect(wheel).to.have.property('tire')
        });

        it('should have a  property', () => {
            expect(wheel).to.have.property('spokes')
        });

        it('should have a property', () => {
            expect(wheel).to.have.property('rim');
        });

        it('should have a property', () => {
            expect(wheel).to.have.property('tube')
        });

    });

});


