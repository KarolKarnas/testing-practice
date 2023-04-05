import caesarCipher from '../js/caesarCipher';

test('shift number bigger than 25', () => {
	expect(caesarCipher('test', 28)).toBe(
		'the shift number can be between 1 - 25'
	);
});

test('shift number lower than 1', () => {
	expect(caesarCipher('test', 0)).toBe(
		'the shift number can be between 1 - 25'
	);
});

test('special characters, numbers, and punctuation does not shifts', () => {
	expect(caesarCipher(`!"#$%&'()*+,-./0123456789:;<=>?@[\\]^_\`{|}~`, 1)).toBe(
		`!"#$%&'()*+,-./0123456789:;<=>?@[\\]^_\`{|}~`
	);
});

test('string with shift = 1', () => {
	expect(caesarCipher('defend the east wall of the castle', 1)).toBe(
		'efgfoe uif fbtu xbmm pg uif dbtumf'
	);
});
test('string with shift = 25', () => {
	expect(caesarCipher('defend the east wall of the castle', 25)).toBe(
		'cdedmc sgd dzrs vzkk ne sgd bzrskd'
	);
});

test('ignore case - string UpperCase with shift = 1 to lower case', () => {
	expect(caesarCipher('DEFEND THE EAST WALL OF THE CASTLE', 1)).toBe(
		'efgfoe uif fbtu xbmm pg uif dbtumf'
	);
});

test('simple "test" by 1', () => {
	expect(caesarCipher('test', 1)).toBe('uftu');
});

test('"za" shift by 25 - borderline case', () => {
	expect(caesarCipher('za', 25)).toBe('yz');
});

test('"za" shift by 1 - borderline case (2)', () => {
	expect(caesarCipher('za', 1)).toBe('ab');
});
