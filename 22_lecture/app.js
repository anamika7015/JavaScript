//rest parameters = (...rest) allow a function work a variable 
//    number of argument by building them into array

//       spread = expands an array into separte elements
//       rest = builds seperate elements into array


// function openFridge(...foods) {
//     console.log(...foods);
// }
// function getfood(...foods) {
//     return foods;
    
// }
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "momos";
// const food5 = "somasha";
//  openFridge(food1,food2,food3,food4,food5);
//  const food = getfood(food1,food2,food3,food4,food5);
// console.log(food);


function sum(...numbers) {
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(2,4,6)
// console.log(`your total is $${total}`);


function getaverage(...numbers) {
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result/numbers.length;
}
const total1 = getaverage(100,85,99,88,77);
// console.log(total1);



function combineStrings(...strings) {
    return strings.join(" ");
}
const fullName = combineStrings("mr","ram","squarepants","III");
console.log(fullName);
