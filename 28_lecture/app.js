// .reduce = reduce the element of an array to a single value

const prices = [10,30,45,22,20];

const total = prices.reduce(sum);
// console.log(`$${total}`);

function sum(accumulator ,element) {
    return accumulator +element;
    
}

//         gredes 

const grades = [75,50,60,33,99,96];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);
console.log(minimum);
console.log(maximum);
function getMax(accumulator,element) {
    
    return Math.max(accumulator,element)
}
function getMin(accumulator,element) {
    
    return Math.min(accumulator,element)
}