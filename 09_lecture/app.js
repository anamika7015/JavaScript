//random number generator

const myBtn = document.getElementById("myBtn");
const myLable = document.getElementById("myLable");
const min = 1;
const max = 6;
myBtn.onclick = function(){
    randomNum = Math.floor(Math.random() *max)+min;
    myLable.textContent = randomNum;
}

