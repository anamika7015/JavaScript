//.filter = create a new array by filtering out elements

let numbers = [1,2,3,4,5,6,7,8,9];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);
// console.log(oddNums);
// console.log(evenNums);
function isEven(element) {
    return element % 2 === 0;
    
}
function isOdd(element) {
    return element % 2 !== 0;
    
}






// +++++++++++++++++++++++++++++++++ages 
const ages = [16,17,18,19,20,60];

const adults = ages.filter(isAdults);
const Child = ages.filter(isChild);
console.log(adults);
console.log(Child);
function isAdults(element) {
    return element>= 18;
    
}
function isChild(element) {
    return element< 18;
}

//  fruits++++++++++++++++

const words = ["apple","banana","orange","kiwi","pomogranate"];

const shortwords = words.filter(getSortWord);
const longwords = words.filter(getLongWord);
console.log(longwords);
console.log(shortwords);
function getSortWord(element) {
    return element.length<=6;
    
}
function getLongWord(element) {
    return element.length>6;
    
}