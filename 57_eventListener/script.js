// eventListner = Listen for specific events to create interactive web pages
//                events: click,mouseover, mouseout
//                .addEventListener(event, callback/anonmus function/arrow function);

// const mybox = document.getElementById("mybox");
// const mybtn = document.getElementById("mybtn");

// mybox.addEventListener("click",event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH ! 🤕";

    
// });

// mybox.addEventListener("mouseover",event =>{
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it 😮 ";
// });

// mybox.addEventListener("mouseout",event =>{
//     event.target.style.backgroundColor = "lightblue";
//     event.target.textContent = " Click me 😊  ";
// });

// ------------------button event-----------

const mybox = document.getElementById("mybox");
const mybtn = document.getElementById("mybtn");

mybtn.addEventListener("click",event => {
    mybox.style.backgroundColor = "tomato";
    mybox.textContent = "OUCH ! 🤕";

    
});

mybtn.addEventListener("mouseover",event =>{
    mybox.style.backgroundColor = "yellow";
    mybox.textContent = "Don't do it 😮 ";
});

mybtn.addEventListener("mouseout",event =>{
    mybox.style.backgroundColor = "lightblue";
    mybox.textContent = " Click me 😊  ";
});

