const { expect } = require('Chai');
const isOddOrEven = require('./02-evenOrOdd');

describe('isEvenOrOdd function test', () => {
    it('returns undefined if the parameter is not string', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven([1, 0])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven(undefined)).to.be.undefined;
        expect(isOddOrEven(null)).to.be.undefined;
    });

    it('returns even for a string with even length', () => {
        expect(isOddOrEven('hi')).to.equal('even');
        expect(isOddOrEven('abcd')).to.equal('even');
    });

    it('returns odd for a string with odd length', () => {
        expect(isOddOrEven('bye')).to.equal('odd');
        expect(isOddOrEven('abcde')).to.equal('odd');
    });
});