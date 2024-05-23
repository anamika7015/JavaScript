const mybtn = document.getElementById("mybtn");
const  myImg = document.getElementById("myImg");

mybtn.addEventListener("click", event =>{
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        mybtn.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden";
        mybtn.textContent = "Show";
    }
});