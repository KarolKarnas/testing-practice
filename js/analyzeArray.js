const isNotEmpty = (arr) => {
	if (arr.length === 0) {
		return false;
	}
	return true;
}

const isArrayOfNumbers = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (isNaN(arr[i])) {
			return false;
		}
	}
	return true;
}

const getMin = (arr) => {
	const getMin = (a, b) => Math.min(a, b);
	return arr.reduce(getMin);
}

const getMax = (arr) => {
	const getMax = (a, b) => Math.max(a, b);
	return arr.reduce(getMax);
}

const getAverage = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length
}

const analyzeArray = (arr) => {
	if (!isNotEmpty(arr)) {
		return 'array must contain at least one number element!';
	}
	if (!isArrayOfNumbers(arr)) {
		return 'array must contain only numbers';
	}

	const obj = {
        average: getAverage(arr),
        max: getMax(arr),
        min: getMin(arr),
        length: arr.length
    };
	return obj;
}

export default analyzeArray;
