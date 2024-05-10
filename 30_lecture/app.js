// arrow function = a concise way to write function expression 
// good for sample function that you use only once 
//   (parameters)=> some code

const numbers = [1,2,4,5,3,6,7];
const squares = numbers.map((elements) => Math.pow(elements,2));
const cubes = numbers.map((elements) => Math.pow(elements,3));
const evenNums = numbers.filter((elements) => elements % 2===0);
const oddNums = numbers.filter((elements) => elements % 2!==0);
const total = numbers.reduce((accumulators,elements) => accumulators+elements);
console.log(total);
console.log(cubes,squares);
console.log(evenNums,oddNums);
