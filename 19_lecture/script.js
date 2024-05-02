// while loop = repeat some code while some condition is true

let loggedin =true;
let username;
let password;
while(loggedin) {
    username = window.prompt("enter the user name");
    password = window.prompt("enter the passward");
    
    
    if(username === "myusername" && password === "myPassword"){
        loggedin = true;
        console.log("you are logged in");

    }
    else{
        console.log("you are not logged in");
    }
}
