import analyzeArray from '../js/analyzeArray';

test(`[] return 'array must contain at least ona number element!'`, () => {
	expect(analyzeArray([])).toBe(
		'array must contain at least one number element!'
	);
});
test(`['1',8,'test3',4,2,6] return 'array must contain only numbers'`, () => {
	expect(analyzeArray(['1', [8, 343,3432], 'test3', {test: 4}, 2, 6])).toBe(
		'array must contain only numbers'
	);
});
test(`[1,8,3,4,2,6] to have typeof object`, () => {
	expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe('object');
});
test(`[1,8,3,4,2,6] to have "average" property equal to "4"`, () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});
test(`[1,8,3,4,2,6] to have "min" property equal to "1"`, () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});
test(`[1,8,3,4,2,6] to have "max" property equal to "8"`, () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});
test(`[1,8,3,4,2,6] to have "length" property equal to "6"`, () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test(`[1,8,3,4,2,6] to be object with: average: 4, min: 1, max: 8, length: 6`, () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test(`[1] to be object with: average: 1, min: 1, max: 1, length: 1`, () => {
	expect(analyzeArray([1])).toEqual({
		average: 1,
		min: 1,
		max: 1,
		length: 1,
	});
});