const { expect } = require('chai');
const { createCalculator } = require('./07-addSubtract');

describe('Check for addSubtract functionality', () => {

    it('returns a object', () => {
        let actualOutput = typeof createCalculator();
        let expectedOutput = 'object';
        expect(actualOutput).to.equal(expectedOutput);
    });

    it('contains the add,subtract and get properties', () => {
        let calculator = createCalculator();

        expect(calculator).haveOwnProperty('add')
        expect(calculator).haveOwnProperty('subtract')
        expect(calculator).haveOwnProperty('get')
    });

    it('get property works', () => {
        let calculator = createCalculator();
        calculator.add(1);
        expect(calculator.get()).to.equal(1);
    });

    it('add works with number and string param', () => {
        let calculator = createCalculator();

        calculator.add(1);
        calculator.add('1');

        let expected = 2;
        expect(calculator.get()).to.equal(expected);
    });

    it('subtract works with number and string param', () => {
        let calculator = createCalculator();

        calculator.subtract(1);
        calculator.subtract('1');

        let expected = -2;
        expect(calculator.get()).to.equal(expected);
    });
});