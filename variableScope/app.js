// variable scope = where a variable is recognized
//              and accessiable (local and global)


let x = 3; //global scope 
function2();
function function1() {
    let x =1;           //local scope
    console.log(x);
}
function function2() {
    let x = 2;
    console.log(x);
    
}