// array = a variable like structure that can hold 
//        more than 1 value

let fruits = ["apple","banana","orange"];
// fruits.push("coconut");
// fruits.pop();
fruits.unshift("mango");
fruits.shift();

// console.log(fruits);

// let numoffruits = fruits.length;
// console.log(numoffruits);

// let index = fruits.indexOf("mango");
// console.log(index);


fruits.sort().reverse();
for(let fruit of fruits){
    console.log(fruit);
}
