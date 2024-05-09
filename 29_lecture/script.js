// function decleration = define a reusable block ofcode 
//            that performs a spacific task


// function expression =  a way to define functions as values 
//                or variables
// 1. callbacks in asynchronous operations
// 2. higher order function
// 3. closures
// 4. event listners 



           //++++ method 1
// const hello = function() {
//     console.log(`hello!`);
// }
// hello();

//+++++++++++++++method 2 = this is time taking

// setTimeout(function() {
//     console.log("hello!");
// },3000)


const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function(element){
    return Math.pow(element,2);
});
console.log(squares);

const cubes = numbers.map(function(element){
    return Math.pow(element,3);
});
console.log(cubes);
const even = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(even);

const odd = numbers.filter(function(element){
    return element % 2 !== 0;
});
console.log(odd);

const total = numbers.reduce(function(accumulator,element){
    return accumulator+element;
});
console.log(total);


