const { expect } = require('chai');
const { isSymmetric } = require('./05-checkForSymmetry');

describe('Check for symmetry', () => {
    it('works with symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('returns false with non-symmetric array', () => {
        expect(isSymmetric([1, 2, 4, 1])).to.be.false;
    });

    it('returns false for non-array param', () => {
        expect(isSymmetric(2)).to.be.false;
    });

    it('works with symmetric odd-length array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('works with symmetric string array', () => {
        expect(isSymmetric(['a', 'd', 'a'])).to.be.true;
    });

    it('returns false for string param', () => {
        expect(isSymmetric('hello')).to.be.false;
    });

    it('returns false for elements in the array different than a number', () => {
        expect(isSymmetric([2, 4, 4, '2'])).to.be.false;
    });
});