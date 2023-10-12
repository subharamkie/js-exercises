export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const arrayLessThanOne = [];
	for(let i =0;i<nums.length;i++){
		if(typeof nums[i] !== 'string' && nums[i]<1){
			arrayLessThanOne.push(nums[i]);
		}
	}
	return arrayLessThanOne;

}

export function findNamesBeginningWith(names, firstChar) {
	if (!names) throw new Error('names is required');
	if (!firstChar) throw new Error('char is required');
	// Your code here
	const namesArray = [];
	for(let i=0;i<names.length;i++){
		if(names[i].startsWith(firstChar)){
			namesArray.push(names[i]);
		}
	}
	return namesArray;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	// Your code here
	const verbs = [];
	for(let i=0;i<words.length;i++){
		if(words[i].startsWith('to ')){ //to followed by space
			verbs.push(words[i]);
		}
	}
	return verbs;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const intArray = [];
	for(let i=0;i<nums.length;i++){
		if(Number.isInteger(nums[i])){
			intArray.push(nums[i]);
		}
	}
	return intArray;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
	const cities = [];
	for(let i=0;i<users.length;i++){
		cities.push(users[i].data.city.displayName);
	}
	return cities;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	//console.log("orig arr:"+nums);
	const squareRoots = [];
	let sqRoot = 0;
	for(let i=0;i<nums.length;i++){
		if(nums[i]>0){
			sqRoot = Math.sqrt(nums[i]);
			if(Number.isInteger(sqRoot)){
				squareRoots.push(sqRoot);
			}else{
				squareRoots.push(parseFloat(sqRoot.toFixed(2)));
			}
		}
	}
	//console.log('sqrt arr:'+squareRoots);

			
	return squareRoots;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here
	let sentenceContainingStr = [];
	if(typeof str !== 'number'){
		for(let i=0;i<sentences.length;i++){
			if(sentences[i].toLowerCase().includes(str.toLowerCase())){
				sentenceContainingStr.push(sentences[i]);
			}
		}
	}
	return sentenceContainingStr;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
	const longestSides = [];
	let max=0;
	for(let i=0;i<triangles.length;i++){
		max = 0;
		for(let j=0;j<triangles[i].length;j++){
			//loop through each set
			if(triangles[i][j] > max){
				max = triangles[i][j];
			}
		}
		longestSides.push(max);
	}
	return longestSides;
}
