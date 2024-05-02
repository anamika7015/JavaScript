// while loop = repeat some code while some condition is true

let loggedin = false;
let username;
let password;
while(!loggedin) {
    username = window.prompt("enter the user name");
    password = window.prompt("enter the passward");
    
    
    if(username === "myusername" && password === "myPassword"){
      loggedin = true;
        
        
        window.alert("you are logged in");
    }
    else{
        window.alert("you are not logged in");
      
    }
}
