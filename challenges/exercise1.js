export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	// Your code here!
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	if(person.city.toLowerCase() === 'manchester'){
		return true;
	}else{
		return false;
	}
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	const numberOfPeoplePerBus = 40;
	const numberOfBuses = Math.ceil(people/numberOfPeoplePerBus);
	return numberOfBuses;
}

export function countSheep(array) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
	let sheepCount = 0;
	for(let i=0;i<array.length;i++){
		if(array[i] === 'sheep')
			sheepCount++;
	}
	return sheepCount;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	const postCode = person.address.postCode;
	const firstHalfPostCode = postCode.substring(0,postCode.indexOf(' '));
	

}
