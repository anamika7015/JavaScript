//  destructuring = extract values from array and objects,
//  then assign them to variable in a convenient way
//         [] = to to perform array destructuring
//         {} = to perform objects destructuring

// ---------------EXAMPLE 1--------------
//  SWAP THE VALUE OF TWO VARIABLES
 let a= 1;
 let b = 2;
 [a,b] = [b,a];
 console.log(a);
 console.log(b);

//  ----------------EXAMPLE 2--------------
// SWAP 2 ELEMENTS IN ARRAY

const color =["red","yellow","green","pink","white"];
[color[0],color[4]] = [color[4],color[0]];
console.log(color);


// ---------------EXAMPLE 3-------------------
// ASSIGN ARRAY ELEMENT TO VARIABLES

const colors = ["red","yellow","green","pink","white"];
const[firstcolor,secondcolor,thirdcolor,...extracolor] = colors;
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolor);
// ---------------example 4
// EXTRACT VALUES FROM OBJECT

const person1 ={
    firstName : "anamika",
    lastName : "pandey",
    age: 18,
    
}
 const person2 ={
    firstName : "patrick",
    lastName : "star",
    age: 38,
    job: "cook"
}
  
const{firstName,lastName,age,job ="unemployed"} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// ---------------EXAMPLE 5-----------------------
// DESTRUCTURE IN FUNCTION PARAMETERS


function displayPerson({firstName,lastName,age,job ="unemployed"}) {
    console.log(`name:${firstName} ${lastName}`);
    console.log(`age:${age}`);
    console.log(`job: ${job}`);
    
}
const person3 ={
    firstName : "neha",
    lastName : "pandey",
    age: 18,
    
}
 const person4 ={
    firstName : "patrick",
    lastName : "star",
    age: 38,
    job: "cook"
}
displayPerson(person3);