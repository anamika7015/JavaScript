// string slicing = creating a sub string 
// from a portion of another String

//          string slicing(start,end)
 let fulName = "Broseph code"
// let firstName =  fulName.slice(0,2);
// let lastname = fulName.slice(4,8);
// let firstChar = fulName.slice(0,1);
// let lastChar = fulName.slice(-1);

let firstName = fulName.slice(0,fulName.indexOf(" "));
let lastName = fulName.slice(fulName.indexOf(" ")+1);

// console.log(firstName);
// console.log(lastName);



const email = "pandey1@gmail.com";
let username  = email.slice(0,email.indexOf("@"));
let extension  = email.slice(email.indexOf("@")+1);
console.log(username);
console.log(extension);

