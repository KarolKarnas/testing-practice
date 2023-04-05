const alphabet = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

function caesarCipher(str, shiftNum) {
	if (shiftNum > 25 || shiftNum < 1) {
		return 'the shift number can be between 1 - 25';
	}
	const lowStr = str.toLowerCase();
	let encrypted = '';
	// let longShift;
	// let longShiftLast;
	// let shiftedLetter;

	for (let i = 0; i < str.length; i++) {
		const letterIndex = alphabet.indexOf(lowStr[i]);
		if (letterIndex === -1) {
			encrypted += lowStr[i];
		} else {
			let shiftedIndex = (letterIndex + shiftNum) % 26;
			let shiftedLetter = alphabet[shiftedIndex];
			encrypted += shiftedLetter;
		}
		// if (letterIndex === -1) {
		// 	encrypted += lowStr[i];
		// } else if (letterIndex + shiftNum >= 25 && letterIndex === 0) {
		// 	console.log('a');
		// 	longShiftLast = alphabet[shiftNum + letterIndex]
		// 	encrypted += longShiftLast;
		// } else if (letterIndex + shiftNum >= 25) {
		// 	longShift = alphabet[shiftNum - (25 - letterIndex) - 1];
		// 	encrypted += longShift;
		// } else {
		// 	shiftedLetter = alphabet[letterIndex + shiftNum];
		// 	encrypted += shiftedLetter;
		// }
	}

	return encrypted;
}

export default caesarCipher;
