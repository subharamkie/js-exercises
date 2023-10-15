export function getSquares(numArray) {
  if (numArray === undefined) throw new Error("nums is required");
  if (numArray.length === 0) return numArray;
  const squareArray = numArray.map((num) => num * num);
  return squareArray;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("word(s) is required");
  if (words === "") return "";
  let camelCaseWord = words[0];
  if (words.length === 1) {
    return camelCaseWord;
  }
  words.slice(1).forEach((word) => {
    camelCaseWord += word[0].toUpperCase() + word.substring(1);
  });
  return camelCaseWord;
}

export function getTotalSubjects(people) {
  if (people === undefined)
    throw new Error("Array of people objects is required");

  const subjCount = people.reduce(
    (sum, person) => sum + person.subjects.length,
    0
  );
  return subjCount;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("Menu object is required");
  if (!ingredient) throw new Error("Ingredient to check is required");
  let hasIngredient = false;
  hasIngredient = menu.some((item) => item.ingredients.includes(ingredient));
  return hasIngredient;
}

export function duplicateNumbers(array1, array2) {
  if (array1 === undefined || array1.length === 0)
    throw new Error("Arrays are required");
  if (array2 === undefined || array2.length === 0)
    throw new Error("Second array is required");
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) >= 0 && newArray.indexOf(array1[i]) === -1) {
      newArray = insertInSortedArray(newArray, array1[i]);
    }
  }
  return newArray;
}

function insertInSortedArray(array, num) {
  if (array.length === 0) {
    array.push(num);
    return array;
  }
  // TODO: Change to binary search for insertion
  for (let i = 0; i < array.length; i++) {
    if (num < array[i]) {
      array.splice(i, 0, num);
      return array;
    }
  }
  array.push(num);
  return array;
}
