// DOM navigstion = the process of navigating through the structure
                // of an HTML document using javascript.

// .firstElementChild
// .lastElementChild
// .nextElementSibiling
// .previousElementSibling
// .parentElement
// .children

// -------------.firstElementChild-----------

// const element = document.getElementById("fruits");
// const firstchild = element.firstElementChild;
// firstchild.style.backgroundColor = "lightgreen";

// const element = document.querySelectorAll("ul")
// element.forEach(element =>{
//     const firstchild = element.firstElementChild;
//     firstchild.style.backgroundColor = "lightgreen";
// });


// -----------.lastElementChild---------

// const ulelement = document.getElementById("vegetables");
// const lastchild = ulelement.lastElementChild;
// lastchild.style.backgroundColor = "yellow";
// console.log(lastchild);

// const element = document.querySelectorAll("ul")
//  element.forEach(element =>{
//     const lastchild = element.lastElementChild;
//     lastchild.style.backgroundColor = "lightgreen";
// });



// -------------------.nextElementSibiling------------
 
// const idElement = document.getElementById("apple");
// const nextsibling = idElement.nextElementSibling;
// nextsibling.style.backgroundColor = "orange";


// --------------.previousElementSibling----------

// const idelement = document.getElementById("orange");
// const previousSibling = idelement.previousElementSibling;
// previousSibling.style.backgroundColor = "orange";


// ---------------parentElement---------

// const idelement = document.getElementById("ice cream");
// const parents = idelement.parentElement;
// parents.style.backgroundColor = "orange";

// ---------------children--------

const idelement = document.getElementById("vegetables");
const child = idelement.children;

Array.from(child).forEach(child =>{
    child.style.backgroundColor = ("yellow");
})
// child[1].style.backgroundColor = "orange";
