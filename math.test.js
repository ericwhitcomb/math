const math = require('./math');

describe('math module', () => {

    describe('add function', () => {

        test('adds two numbers', () => {
            expect(math.add(3, 5)).toEqual(8);
            expect(math.add(2, -3)).toEqual(-1);
            expect(math.add(1.2, 3.1)).toEqual(4.3);
        });

        test('converts numerical strings', () => {
            expect(math.add('3', '2')).toEqual(5);
        });

        test('returns NaN for non numerical input', () => {
            expect(math.add('a', 'b')).toBeNaN();
            expect(math.add('x', 3)).toBeNaN();
            expect(math.add([1, 2, 3], [3, 4, 5])).toBeNaN();
        });

    });

    describe('subtract function', () => {

        test('subtracts two numbers', () => {
            expect(math.subtract(9, 6)).toEqual(3);
            expect(math.subtract(2, 3)).toEqual(-1);
            expect(math.subtract(2, -3)).toEqual(5);
            expect(math.subtract(4.5, 3.1)).toEqual(1.4);
            expect(math.subtract(3.1, 4.5)).toEqual(-1.4);
        });

        test('converts numerical strings', () => {
            expect(math.subtract('7', '2')).toEqual(5);
        });

        test('returns NaN for non numerical input', () => {
            expect(math.subtract('a', 'b')).toBeNaN();
            expect(math.subtract('x', 3)).toBeNaN();
            expect(math.subtract([1, 2, 3], [3, 4, 5])).toBeNaN();
        });

    });

    describe('throwError function', () => {
        test('throws error', () => {
            expect(() => { math.throwError(); }).toThrow();
          });

        test('throws type error', () => {
            expect(() => { math.throwError(); }).toThrowError(TypeError);
        });
    });

});