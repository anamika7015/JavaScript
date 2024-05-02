//   METHOD CHANING = calling one method after another 
                        //  in one continuous line of code .
    
    let username = window.prompt("enter the number :");

    //-----------NO METHOD CHANING-------------//

    username = username.trim();
    let letter = username.charAt();
    letter = letter.toUpperCase();

    let extrachar = username.slice(1);
    extrachar = extrachar.toLowerCase();
    username = letter +extrachar;
    console.log(username);