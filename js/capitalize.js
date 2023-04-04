function capitalize(string) {
	const stringLower = string.toLowerCase();
	const firstLetter = string[0].toUpperCase();
	const capitalized = firstLetter + stringLower.slice(1);
	return capitalized;
}

export default capitalize;
