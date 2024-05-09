// .map()= accepts a callback and applies that function 
//        to each elements of an array, then return a new array


const numbers = [1,2,3,4,5,6];
const squares = numbers.map(square);
const cube = numbers.map(cubes)
// console.log(squares);
// console.log(cube);
function square(element) {
    return Math.pow(element,2);
}

function cubes(element) {
    return Math.pow(element,3);
}


//+++++++++++++++++++++++nam+++++++++++++

const names = ["anamika","neha","putul","shiva"];
const upper = names.map(uppercase);
const lower = names.map(lowercase);
const captlizeName = names.map(captlize);
console.log(captlizeName);
console.log(lower);
console.log(upper);
function uppercase(element) {
    return element.toUpperCase();
    
}
function lowercase(element) {
    return element.toLowerCase();
    
}
function captlize(element) {
    return element.charAt().toUpperCase() + element.slice(1);
    
}
