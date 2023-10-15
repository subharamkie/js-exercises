export function findSmallNums(numbers) {
  if (!numbers) throw new Error("nums is required");
  const arrayLessThanOne = numbers.filter((num)=> {
    return num < 1;
  });
  return arrayLessThanOne;
}

export function findNamesBeginningWith(names, firstChar) {
  if (!names) throw new Error("names is required");
  if (!firstChar) throw new Error("char is required");
  const namesArray = names.filter((name) =>{
    return name.startsWith(firstChar);
  });
  return namesArray;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = words.filter((word)=> {
    return word.startsWith("to ");
  });
  return verbs;
}

export function getIntegers(numbers) {
  if (!numbers) throw new Error("nums is required");
  const intArray = numbers.filter((num)=> {
    return Number.isInteger(num);
  });
  return intArray;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = users.map((user) =>{
    return user.data.city.displayName;
  });
  return cities;
}

export function getSquareRoots(numbers) {
  if (!numbers) throw new Error("nums is required");
  let sqRoot = 0;
  const squareRoots = numbers.map((num)=> {
    sqRoot = Math.sqrt(num);
    if (Number.isInteger(sqRoot)) {
      return sqRoot;
    } else {
      return parseFloat(sqRoot.toFixed(2));
    }
  });
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let sentenceContainingStr = sentences.filter((sentence) =>{
    return sentence.toLowerCase().includes(str.toLowerCase());
  });
  return sentenceContainingStr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSides = triangles.map((triangle)=> {
    return Math.max(...triangle);
  });
  return longestSides;
}
