export function getSquares(numArray) {
  if (numArray === undefined) throw new Error("nums is required");
  if (numArray.length === 1) return numArray;
  for (let i = 0; i < numArray.length; i++) {
    numArray[i] = numArray[i] * numArray[i];
  }
  return numArray;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCaseWord = words[0];
  if (words.length === 1) {
    return camelCaseWord;
  }
  for (let i = 1; i < words.length; i++) {
    camelCaseWord += words[i][0].toUpperCase() + words[i].substring(1);
  }
  return camelCaseWord;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subjCount = 0;

  for (let i = 0; i < people.length; i++) {
    subjCount += people[i].subjects.length;
  }
  return subjCount;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let hasIngredient = false;
  
  for (let i = 0; i < menu.length; i++) {
    for (let j = 0; j < menu[i].ingredients.length; j++) {
      if (ingredient === menu[i].ingredients[j]) {
        hasIngredient = true;
      }
    }
  }
  return hasIngredient;
}

export function duplicateNumbers(array1, array2) {
  if (array1 === undefined) throw new Error("arr1 is required");
  if (array2 === undefined) throw new Error("arr2 is required");
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) >= 0 && newArray.indexOf(array1[i]) === -1) {
      newArray = addToArray(newArray, array1[i]);
    }
  }
  return newArray;
}

export function addToArray(array, num) {
  if (array === undefined) throw new Error("array is required");
  if (num === undefined) throw new Error("Number to add is required");
  if (array.length === 0) {
    array.push(num);
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (num < array[i]) {
      array.splice(i, 0, num);
      return array;
    }
  }
  array.push(num);
  return array;
}
