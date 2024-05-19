// element selector   = Method used to target and manipulate HTML elements 
//       They allows you to select one or multiple HTML elements
//       from the DOM (document object model)

// 1. document.getElementById()       // ELEMENT OR NULL
// 2.document.getElementClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName() //httml collection 
//4. document.querySelector()     //  First element or null 
// 5.document.querySelectorAll()      // NODELIST

const myheading = document.getElementById("myheading");
// myheading.style.backgroundColor = "yellow" ;
// myheading.style.textAlign = "center";
console.log(myheading);


const fruits = document.getElementsByClassName("fruits");
// for( let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }
Array.from(fruits).forEach(fruits =>{
    fruits.style.backgroundColor = "yellow";
});
console.log(fruits);


 const h4tag = document.getElementsByTagName("h4");
 const litag = document.getElementsByTagName("li");

//  h4tag[0].style.backgroundColor = "yellow";

// for (let h4tags of h4tag) {
//     h4tags.style.backgroundColor = "yellow";
    
// }
// for (let litags of litag) {
//     litags.style.backgroundColor = "pink";
    
// }


// const element = document.querySelector(".fruits");
 
// element.style.backgroundColor = "lightgreen";
const element = document.querySelectorAll("h4");

element.forEach(element =>{
    element.style.backgroundColor = "pink";
});
