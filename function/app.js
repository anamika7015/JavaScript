//funcction = Asection of reuseable code
//        Declare code once, use it whenever you want .
//       call the function to execute that code.

function add(x,y){
    return x+y
}
console.log(add(5,7));

function sub(x,y){
    return x - y
}
console.log(sub(5,7));

function mul(x,y){
    return x * y
}
console.log(mul(22,44));

function divide(x,y) {
    return x/y
}
console.log(divide(77,7))

function iseven(n) {
    return n%2 === 0 ?true : false;

}
console.log(iseven(13));
function isvalidEmail(email) {
    return email.includes("@") ? true : false;
}

console.log(isvalidEmail("apandey@gmail.com"))
console.log(isvalidEmail("apandeygmail.com"))