export function findSmallNums(numbers) {
  if (!numbers) throw new Error("nums is required");
  const arrayLessThanOne = [];
  numbers.forEach(function (num) {
    if (typeof num !== "string" && num < 1) {
      arrayLessThanOne.push(num);
    }
  });
  return arrayLessThanOne;
}

export function findNamesBeginningWith(names, firstChar) {
  if (!names) throw new Error("names is required");
  if (!firstChar) throw new Error("char is required");
  const namesArray = [];
  names.forEach(function (name) {
    let nameArr = name.split("");
    nameArr.forEach(function (character) {
      if (character === firstChar) {
        namesArray.push(name);
      }
    });
  });
  return namesArray;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = [];
  words.forEach(function (item) {
    if (item.startsWith("to ")) {
      verbs.push(item);
    }
  });
  return verbs;
}

export function getIntegers(numbers) {
  if (!numbers) throw new Error("nums is required");
  const intArray = [];
  numbers.forEach(function (num) {
    if (Number.isInteger(num)) {
      intArray.push(num);
    }
  });
  return intArray;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];
  users.forEach(function (user) {
    cities.push(user.data.city.displayName);
  });
  
  return cities;
}

export function getSquareRoots(numbers) {
  if (!numbers) throw new Error("nums is required");
  const squareRoots = [];
  let sqRoot = 0;
  numbers.forEach(function (num) {
    if (num > 0) {
      sqRoot = Math.sqrt(num);
      if (Number.isInteger(sqRoot)) {
        squareRoots.push(sqRoot);
      } else {
        squareRoots.push(parseFloat(sqRoot.toFixed(2)));
      }
    }
  });
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let sentenceContainingStr = [];
  sentences.forEach(function (sentence) {
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      sentenceContainingStr.push(sentence);
    }
  });
  return sentenceContainingStr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSides = [];
  let max = 0;
  triangles.forEach(function (triangle) {
    max = 0;
    triangle.forEach(function (side) {
      if (side > max) {
        max = side;
      }
    });
    longestSides.push(max);
  });
    return longestSides;
}
