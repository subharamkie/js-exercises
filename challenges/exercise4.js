export const findNextNumber = (numbers, number) => {
  if (numbers === undefined) throw new Error("Number array is required");
  if (number === undefined) throw new Error("Number to find is required");
  const index = numbers.indexOf(number);
  return index !== numbers.length - 1 && index !== -1
    ? numbers[index + 1]
    : null;
};

export const count1sand0s = (binaryStr) => {
  if (binaryStr === undefined || binaryStr === '') throw new Error("Non empty binary string is required");
  const strArray = binaryStr.split("");
  const binaryCountObj = { 1: 0, 0: 0 };
  strArray.forEach((item) => {
    if (binaryCountObj[Number(item)] === undefined) {
      binaryCountObj[Number(item)] = 1;
    } else {
      binaryCountObj[Number(item)] += 1;
    }
  });
  return binaryCountObj;
};

export const reverseNumber = (number) => {
  if (number === undefined) throw new Error("Number is required");
  const numberArray = Math.abs(number).toString().split("");
  let reversedNumber = "";
  numberArray.forEach((digit) => {
    reversedNumber = digit + reversedNumber;
  });
  return number < 0 ? -Number(reversedNumber) : Number(reversedNumber);
};

export const sumArrays = (array) => {
  if (array === undefined) throw new Error("Array of number arrays is required");
  const sumOfArrays = array
    .map((numberArray) => numberArray.reduce((sum, number) => sum + number, 0))
    .reduce((finalSum, arraySum) => finalSum + arraySum, 0);
  return sumOfArrays;
};

export const arrShift = (array) => {
  if (array === undefined) throw new Error("Array is required");
  if (array.length < 2) return array;
  const tmpVar = array[0];
  const length = array.length;
  array[0] = array[length - 1];
  array[length - 1] = tmpVar;
  return array;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("Haystack is required");
  if (searchTerm === undefined || searchTerm === "") throw new Error("searchTerm is required");
  const values = Object.values(haystack);
  let containsFlag = false;
  values.forEach((value) => {
    if (value.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
      containsFlag = true;
    }
  });
  return containsFlag;
};

export const getWordFrequencies = (string) => {
  if (string === undefined || string === "") throw new Error("Non empty string is required");
  const stringWithoutSplChar = string
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .toLowerCase();
  const strArray = stringWithoutSplChar.split(" ");
  let frequencyObj = {};
  strArray.forEach((word) => {
    if (frequencyObj[word] === undefined) {
      frequencyObj[word] = 1;
    } else {
      frequencyObj[word] += 1;
    }
  });
  return frequencyObj;
};
