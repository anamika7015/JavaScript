// Nodelist = Static collection of HTML elements by (id, class , element)
//         can be created by  using querySelectorAll()
//         similar  to be an array ,but no (map , filter , reduce)
//         Nodelist won't update to automatically reflect changes


let buttons = document.querySelectorAll(".mybtn");

// console.log(buttons)

// ADD HTML /CSS PROPERTY

// buttons.forEach(button => {
//     button.style.backgroundColor ="blue";
//     button.textContent +="😎";
// });

//CLICK event listener 

// buttons.forEach(buttons =>{
//     buttons.addEventListener("click",event =>{

//         event.target.style.backgroundColor ="tomato";
//     });
// });



// MOUSEOVER + MOUSEOUT event listener 

// buttons.forEach(button =>{
//     button.addEventListener("mouseover", event =>{
//         event.target.style.backgroundColor = "pink";
//     });
// });

// buttons.forEach(button =>{
//     button.addEventListener("mouseout", event =>{
//         event.target.style.backgroundColor = "lightpink";
//     });
// });

// ADD AN ELEMENT

// step 1
// const newbtn = document.createElement("button");

//  newbtn.textContent = "Button 5";  // step2
// newbtn.classList = "mybtn";
// document.body.appendChild(newbtn); //step3
// buttons = document.querySelectorAll(".mybtn");
// console.log(buttons)

// REMOVE AN ELEMENT

// buttons.forEach(button =>{
//     button.addEventListener("click", event =>{
//         event.target.remove();
//         buttons = document.querySelectorAll(".mybtn");
//         console.log(buttons);
//     });
// });