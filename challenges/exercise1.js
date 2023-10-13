export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city.toLowerCase() === "manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const NUMBER_OF_PEOPLE_PER_BUS = 40; //Mentioned in test case
  const numberOfBuses = Math.ceil(people / NUMBER_OF_PEOPLE_PER_BUS);
  return numberOfBuses;
}

export function countSheep(array) {
  if (array === undefined) throw new Error("array is required");
  const sheepCount = array.filter((item)=>item.toLowerCase() === "sheep").length;
  return sheepCount;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  const postCode = person.address.postCode;
  const firstHalfPostCode = postCode.substring(0, postCode.indexOf(" "));
  return firstHalfPostCode[0].toUpperCase() === "M" && /\d/.test(firstHalfPostCode[1]);
}
