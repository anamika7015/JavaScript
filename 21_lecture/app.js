// spread  operators = ... allows an iterable such as an 
//                array or string to be expanded
//                 into seperate elements
//                  (unpacks the elements)



// let numbers =[1,2,3,4,5];
// let maximum = Math.max(... numbers);
// let minimum = Math.min(...numbers);
// console.log(maximum);
// console.log(minimum);

let username = "Bro code";
let letters = [...username].join("-");
console.log(letters);

let fruits = ["orange"]