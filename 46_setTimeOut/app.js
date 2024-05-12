// setTimeout() = function of js that allow  you to schedule
//  the execution of  a function after an amount  of time (milliseconds)
//  times are approximate (varies based on the workload of js runtime env.)
// setTimeout(callback,delay)
// clearTimeout(timeoutId) = can cancel a time before it triggers



//  ----------EXAMPLE 1

function sayhello() {
    window.alert(`Hello!`)
    
}
// setTimeout(sayhello,3000)



// ----------------or---------------
//  const timeoutId = setTimeout(()=> window.alert("Hello!"),3000);

//  clearTimeout(timeoutId);
  

let timeoutId;
function startTimer() {
   timeoutId = setTimeout(() => window.alert("Hello!"),3000);
    console.log("starter");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("cleaned");
}
