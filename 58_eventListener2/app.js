// eventListner = Listen for specific events to create interactive web pages
//               events: keydown, keyup
//              document.addEventListener(event, callback);

const mybox = document.getElementById("mybox");



document.addEventListener("keydown",event =>{
    mybox.textContent = "😮";
    mybox.style.backgroundColor ="tomato";
});

document.addEventListener("keyup",event =>{
    mybox.textContent = "😎";
    mybox.style.backgroundColor ="lightblue";
});

