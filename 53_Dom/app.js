// DOM = DOCUMENT OBJECT MODEL
//     object{} that represent the page you see in the web browser
//    and provides you with an API  to interact with it.
//   web browser construct the DOM when it loads an html documents,
//   and structure all the element in a tree - like representation 
//   javascript can access the dom to dynamically
//   change the content ,structure, and style of a web page

const username = "Brocode";

const welcomemsg = document.getElementById("welcome-msg");
welcomemsg.textContent += username === ""? `guest` : username;
console.dir(document);