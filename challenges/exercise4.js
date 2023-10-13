export const findNextNumber = (numbers, number) => {
  if (numbers === undefined) throw new Error("numbers is required");
  if (number === undefined) throw new Error("number is required");
  const index = numbers.indexOf(number);
  return index !== numbers.length - 1 && index !== -1
    ? numbers[index + 1]
    : null;
};

export const count1sand0s = (binaryStr) => {
  if (binaryStr === undefined) throw new Error("Binary string is required");
  const strArray = binaryStr.split('');
  let binaryCount = {};
  strArray.forEach((char) => {
    if (binaryCount.char === undefined) {
      binaryCount.char = 1;
    } else {
      binaryCount.char += 1;
    }
  });
  console.log("obj:"+binaryCount);
  return binaryCount;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
