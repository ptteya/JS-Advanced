const expect = require('chai').expect;
const sum = require('./04-sumOfNumbers');

describe('Sum of numbers', () => {
    it('works with positive numbers in a numeric array', () => {
        let actualSum = sum([1, 2, 3, 4]);
        let expectedSum = 10;

        expect(actualSum).to.equal(expectedSum);
    });

    it('works with a negative number in a numeric array', () => {
        let actualSum = sum([1, 2, -3, 4]);
        let expectedSum = 4;

        expect(actualSum).to.equal(expectedSum);
    });

    it('returns zero for an array of zeros', () => {
        let actualSum = sum([0, 0]);
        let expectedSum = 0;

        expect(actualSum).to.equal(expectedSum);
    });
})