const mybtn = document.getElementById("mybtn");
const  myImg = document.getElementById("myImg");
const bgcolor = document.getElementById("container");

mybtn.addEventListener("click", event =>{
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        mybtn.textContent = "Hide";
        message.textContent = ""
        bgcolor.style.backgroundColor = "#fff"
    }
    else{
        myImg.style.visibility = "hidden";
        mybtn.textContent = "Show";
        message.textContent = "Click here to show the image"
        bgcolor.style.backgroundColor = "chocolate"
    }
});