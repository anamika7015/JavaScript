// classlist = Element property in javascript used to interact
//    with an element's list of classes (css class)
//    Allows you to make reusable classes for many elements 
//    across your webpage.


// add()
// remove()
// toggle(remove if present, add if not)
//  replace(oldclass, new class)
// contains()
 
                    //  FIRST EXAMPLE  //

//  const mybtn = document.getElementById("mybtn");


//  add  and remove the classlist
//  mybtn.classList.add("enabled");
//  mybtn.classList.remove("enabled");

// mybtn.addEventListener("mouseover", event =>{
//     event.target.classList.toggle("hover");
// });
// mybtn.addEventListener("mouseout", event =>{
//     event.target.classList.toggle("hover");
// });


// mybtn.classList.add("enabled");

// mybtn.addEventListener("click",event =>{
//      if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😎";
//      }
//      else{
//          event.target.classList.replace("enabled","disabled");

//      }
 
// });




                       // NODELIST EXAMPLE 2 //

let buttons = document.querySelectorAll(".mybtn");

buttons.forEach(button =>{
    button.classList.add("enabled");
});

buttons.forEach(button =>{
    button.addEventListener("mouseover",event =>{
        event.target.classList.toggle("hover");
    });
    button.addEventListener("mouseout",event =>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button =>{
   button.addEventListener("click",event =>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "😒";
    }
    event.target.classList.replace("enabled","disabled");
   }) ;
});