import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
} from '../challenges/exercise5';

describe("sumMultiples",() => {
    test('It returns the sum of any numbers that are a multiple of 3 or 5',() =>{
        expect(sumMultiples([4,6,9,12,14,15,60])).toBe(102);
        expect(sumMultiples([5.0, 3, 7, 8, 1, 10])).toBe(18);
		expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(882);
        expect(sumMultiples([1, 2, 4, 8, 0])).toBe(0);
        
    });
    test('Throw error if array is not passed', () => {
		expect(()=> {
            sumMultiples();
        }).toThrow('Array is required');
        expect(()=>{
            sumMultiples('foo');
        }).toThrow('Array is required');
	});

});
describe("isValidDNA" ,()=>{
    test('Error if no str is passed',() =>{
       expect(()=>{isValidDNA();}).toThrow('str is required');
    });
    test('False if empty string is passed',()=>{
        expect(isValidDNA('')).toBe(false);
    });
    test('False if string contains characters other than CGTA',()=>{
        expect(isValidDNA('CCGGGJWIIQTTAAA')).toBe(false);
    });
    test('True if string contains only CGTA',()=>{
        expect(isValidDNA('CCGGGTTTTAAAA')).toBe(true);
        expect(isValidDNA('TTTTAAAACC')).toBe(true);
        expect(isValidDNA('CCGGG')).toBe(true);
        expect(isValidDNA('AAATTTCCC')).toBe(true);
        expect(isValidDNA('AAAAAA')).toBe(true);
    });
    
});

describe("getComplementaryDNA",()=>{
    test('If no string is passed',() =>{
        expect(()=>{getComplementaryDNA();}).toThrow('String is required');
    });
    
    test('If invalid string is passed',() =>{
        expect(()=>{getComplementaryDNA('CCDDFFEE');}).toThrow('String is not a valid DNA');
    });
    test('Complementary DNA, C by G,T by A,A by T,G by C',() =>{
        expect(getComplementaryDNA('CCGG')).toBe('GGCC');
        expect(getComplementaryDNA('CCGGTTAAA')).toBe('GGCCAATTT');
        expect(getComplementaryDNA('GCGCATATC')).toBe('CGCGTATAG');
        
    });
    test('Complementary DNA case insensitive, C by G,T by A,A by T,G by C',() =>{
        expect(getComplementaryDNA('ccGG')).toBe('GGCC');
        expect(getComplementaryDNA('CCGGTTaaa')).toBe('GGCCAATTT');
        expect(getComplementaryDNA('GCGCAtatC')).toBe('CGCGTATAG');
        
    });
});

describe("isItPrime",()=>{
    test('If 0 or 1 is passed, return false',()=>{
        expect(isItPrime(0)).toBe(false);
        expect(isItPrime(1)).toBe(false);
    });
    test('Error is nothing is passed',()=>{
        expect(()=>{isItPrime();}).toThrow('number is required');
    });
    test('True is 2 or 3 is passed',() =>{
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
    });
    test('True or false depending on the number passed',() =>{
        expect(isItPrime(17)).toBe(true);
        expect(isItPrime(13)).toBe(true);
        expect(isItPrime(199)).toBe(true);
        expect(isItPrime(123)).toBe(false);
        expect(isItPrime(17891)).toBe(true);
        expect(isItPrime(12345)).toBe(false);
    });
    
});

describe("createMatrix",() => {
    test('Throw error if number of items is no passed',()=>{
        expect(()=>{createMatrix();}).toThrow('number is required');
    });
    test('Throw error if string is empty or not passed',()=>{
        expect(()=>{createMatrix('foo');}).toThrow('fill string is required');
    });
    test('A 2d array 9 elements',() =>{
        expect(createMatrix(3,'test')).toEqual([['test','test','test'],['test','test','test'],['test','test','test']]);
    });
    test('An array with 1 element',() =>{
        expect(createMatrix(1,'foo')).toEqual([['foo']]);
    });
    
    test('Empty Array if length is 0',() =>{
        expect(createMatrix(0,'test')).toEqual([]);
    });
});

describe("areWeCovered",()=> {
    test('If empty array is passed, return false',() =>{
        expect(areWeCovered([],'Monday')).toBe(false);
    });
    test('Return false if day is empty',() =>{
        expect(areWeCovered([
             { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
              { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
             ],'')).toBe(false);
    });
    test('Returns false if staff count is <3 for a particular day',()=>{
        const staff = [
            {name:"george",rota:["Monday","Tuesday"]},
            {name:"Sam",rota:["Monday","Saturday"]},
            {name:"Rita",rota:["Friday","Saturday"]}];
        expect(areWeCovered(staff,'Friday')).toBe(false);
    });
    test('Returns true if staff count is 3 or more for a particular day',()=>{
        const staff = [
            {name:"george",rota:["Monday","Tuesday"]},
            {name:"Sam",rota:["Monday","Saturday"]},
            {name:"Rita",rota:["Friday","Saturday"]},
        {name:"Gita",rota:["Saturday","Sunday"]}];
        expect(areWeCovered(staff,'Saturday')).toBe(true);
    });
    test('Case insensitive check for a particular day',()=>{
        const staff = [
            {name:"george",rota:["Monday","Tuesday"]},
            {name:"Sam",rota:["Monday","Saturday"]},
            {name:"Rita",rota:["Friday","Saturday"]},
        {name:"tommy",rota:["Saturday","Sunday","Monday"]}];
        expect(areWeCovered(staff,'saturday')).toBe(true);
    });
});