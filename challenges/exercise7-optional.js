export function printColours(colours) {
  if (colours === undefined || colours.length === 0)
    throw new Error("Colour array is required");
  return [...colours];
}

export function shoppingList(list, newItem) {
  if (list === undefined) throw new Error("List is required");
  if (newItem === undefined) throw new Error("New item is required");
  return [...list, ...newItem];
}

export function highestNumber(numbers) {
  if (numbers === undefined || numbers.length === 0)
    throw new Error("Numbers array is required");
  return Math.max(...numbers);
}

export function splitThatString(string) {
  if (!string || string === "") throw new Error("String is required");
  return string.split("");
}

export function addressLookUp(user) {
  if (!user) throw new Error("User is required");
  return user?.address?.postcode;
}
