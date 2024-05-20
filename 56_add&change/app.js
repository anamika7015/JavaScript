//  --------------EXAMPLE 1 <H1>----------

// STEP 1 CREATE THE ELEMENT

 const newh1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newh1.textContent = "i like pizza";
newh1.id = "h1";
newh1.style.color = ("tomato");
newh1.style.textAlign =("center");

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newh1);
// document.body.prepend(newh1);
 document.getElementById("box1").append(newh1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newh1,box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newelement, currentElement);
// document.body.insertBefore(newh1, boxes[1]);

// REMOVE HTML ELEMENT

document.getElementById("box1").removeChild(newh1);
// document.body.removeChild(newh1);
