const { assert } = require('chai');
const lookupChar = require('./03-charLookup');

describe('lookupChar function test', () => {

    it('should return undefined if first param is not a string', () => {
        assert.equal(lookupChar(1, 1), undefined);
        assert.equal(lookupChar({}, 1), undefined);
    });

    it('should return undefined if second param is not an int number', () => {
        assert.equal(lookupChar('hi', '1'), undefined);
        assert.equal(lookupChar('hi', []), undefined);
        assert.equal(lookupChar('hi', 1.1), undefined);
    });

    it('should return Incorrect index if the strings length is less than or equal to the index', () => {
        assert.equal(lookupChar('hi', 3), 'Incorrect index');
        assert.equal(lookupChar('hi', 2), 'Incorrect index');
    });

    it('should return Incorrect index if index is less than zero', () => {
        assert.equal(lookupChar('hi', -1), 'Incorrect index');
    });

    it('should return the character at the specified index', () => {
        assert.equal(lookupChar('hi', 1), 'i');
        assert.equal(lookupChar('bye', 2), 'e');
    });
});