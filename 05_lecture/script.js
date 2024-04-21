
let username;
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("myh1").textContent = `hello ${username}`
}