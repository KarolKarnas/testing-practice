import reverseString from '../js/reverseString';

test(`'test' output 'tset'`, () => {
	expect(reverseString('test')).toBe('tset');
});

test(`'Install' output 'llatsnI'`, () => {
	expect(reverseString('Install')).toBe('llatsnI');
});

test(`long sentence reverse`, () => {
	expect(
		reverseString(
			'In web developing and computer programming, a string is sometimes needed to be reversed. A string is an ordered sequence of data, often made up of characters, used in the computer science industry.'
		)
	).toBe(
		'.yrtsudni ecneics retupmoc eht ni desu ,sretcarahc fo pu edam netfo ,atad fo ecneuqes deredro na si gnirts A .desrever eb ot dedeen semitemos si gnirts a ,gnimmargorp retupmoc dna gnipoleved bew nI'
	);
});


test(`'0123456789' output '9876543210'`, () => {
	expect(reverseString('0123456789')).toBe('9876543210');
});


