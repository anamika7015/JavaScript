// synchronous = execute line by line consecutively in a sequential manner
//      code that wait for an operation to complete.

// asynchronous = allows multiple operations to be performed concurrently without waiting 
//    dosenot block the execution flow and allows the program to continue
//   (I/O operations , network requests , fetching data)
// handled with : callbacks , promises , async/await

// --------------------synchronous-----------------------
setTimeout(()=>{console.log("task1")});
console.log("task2");
console.log("task3");
console.log("task4");


// --------------------------asynchronous------------------
function function1(callbacks) {
    setTimeout(()=>{console.log("task1");
                     callbacks()},3000);
}


function function2() {
console.log("task2");
console.log("task3");
console.log("task4");
}
function1(function2)