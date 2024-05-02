// string method = allow you to manipulate and work with text(strings)

let username = "brocode";
// console.log(username.charAt(0));
// console.log(username.indexOf("o"));
// console.log(username.lastIndexOf("o"));//last index of the code
// console.log(username.length);

//  username = username.trim();
//  username = username.toUpperCase();
//  username = username.repeat(2);
//  console.log(username);

// let result = username.startsWith(" ");//evenly space use
// let result = username.endsWith(" ");//evenly space use
// console.log(result);



let phonenumber = "0682-825-782";
phonenumber = phonenumber.replaceAll("-","");
phonenumber = phonenumber.padEnd(15,4);
console.log(phonenumber);

