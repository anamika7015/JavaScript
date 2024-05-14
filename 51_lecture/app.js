// error = an object that is created to represent a problem that occurs
//      occurs often with user input or establishing o connection
//  try{} = encloses code that might potentially cause an error 
//  catch {} = catch and handle any thrown error from try { }
// finally {} = (optional) always execute .used mostly for clean up
//          ex. close files , close connection ,release resources

try{
    const dividend = Number(window.prompt("enter the dividend: "));
    const divisor = Number(window.prompt("enter the divisor: "));
if(divisor == 0){
    throw new Error("you can't divide by zero");

}
if(isNaN(dividend)||isNaN(divisor)){
    throw new Error("value must be a number")
}
    const result = dividend/divisor;
    console.log(result);

}
catch(error){
console.error(error);
}
console.log("you have reached the end");