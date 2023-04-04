import calculator from '../js/calculator';

test('calculator has add method', () => {
	expect(
		calculator.hasOwnProperty('add') && typeof calculator.add === 'function'
	).toBeTruthy(); //toBe(true)
});

test('calculator adding 1 + 2 equals 3', () => {
	expect(calculator.add(1, 2)).toBe(3);
});

test('calculator subtract 3 - 2 equals 1', () => {
	expect(calculator.subtract(3, 2)).toBe(1);
});

test('calculator multiplication of 2 * 3 equals 6', () => {
	expect(calculator.multiply(2, 3)).toBe(6);
});

test('calculator division of 6 / 2 equals 3', () => {
	expect(calculator.divide(6, 2)).toBe(3);
});
