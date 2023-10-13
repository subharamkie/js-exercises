/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (numberArray) => {
  if (numberArray === undefined) throw new Error("Array is required");
  if (!Array.isArray(numberArray)) throw new Error("Array is required");
  const sumOfMultiples = numberArray.reduce((sum, number) => {
    if (number % 3 === 0 || number % 5 === 0) {
      return sum + number;
    }
    return sum;
  }, 0);
  return sumOfMultiples;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (dnaString) => {
  if (dnaString === undefined) throw new Error("str is required");
  return /^[cgtaCGTA]+$/.test(dnaString);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (dnaString) => {
  if (dnaString === undefined) throw new Error("String is required");
  if (!isValidDNA(dnaString)) throw new Error("String is not a valid DNA");

  const complementaryObj = { T: "A", C: "G", A: "T", G: "C" };
  const strArray = dnaString.split("");
  let complementaryStr = "";
  strArray.forEach((letter) => {
    complementaryStr += complementaryObj[letter.toUpperCase()];
  });
  return complementaryStr;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (number) => {
  if (number === undefined) throw new Error("number is required");
  let isPrime = true;
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  const numSqrt = Math.sqrt(number);
  for (let i = 2; i <= numSqrt; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (arrLength, fillString) => {
  if (arrLength === undefined) throw new Error("number is required");
  if (fillString === undefined || fillString === '') throw new Error("fill string is required");
  const innerArray = new Array(arrLength).fill(fillString);
  const outerArray = new Array(arrLength).fill(innerArray);
  return outerArray;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staffObjArray
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staffObjArray, day) => {
  if (staffObjArray === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let staffCount = 0;
  staffObjArray.forEach((obj) => {
    if (obj.rota !== undefined) {
      obj.rota.forEach((staffDays) => {
        if (staffDays.toLowerCase() === day.toLowerCase()) {
          staffCount++;
        }
      });
    }
  });
  return staffCount >= 3 ? true : false;
};
