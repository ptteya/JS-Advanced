const { expect } = require('chai');
const mathEnforcer = require('./04-mathEnforcer');

describe('mathEnforcer function test', () => {

    describe('addFive', () => {
        it('should return undefined if addFive param is not a number', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined;
            expect(mathEnforcer.addFive([1])).to.be.undefined;
        });

        it('should work if addFive param is a positive, negative, and floating-point  number', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(-1)).to.equal(4);
            expect(mathEnforcer.addFive(0.01)).to.equal(5.01);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined if subtractTen param is not a number', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
            expect(mathEnforcer.subtractTen([1])).to.be.undefined;
        });

        it('should work if subtractTen param is a positive, negative, and floating-point  number', () => {
            expect(mathEnforcer.subtractTen(11)).to.equal(1);
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
            expect(mathEnforcer.subtractTen(0.01)).to.equal(-9.99);
        });
    });

    describe('sum', () => {
        it('should return undefined if sum parameters are not numbers', () => {
            expect(mathEnforcer.sum('1', 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
        });

        it('should work if sum parameters are positive, negative, and floating-point numbers', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
            expect(mathEnforcer.sum(1, 0.01)).to.equal(1.01);
        });
    });
});