// random password generator
function generatePassword(length , includesLowercase , includeUppercase, includesNumbers,includeSymbol) {
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVEXYZ";
const numberChars = "0123456789";
const symbolsChars = "!@#$%^&*()_+=-";
let allowchars ="";
let password = "";
allowchars += includesLowercase ?lowercaseChars :"";
allowchars += includeUppercase ? uppercaseChars :"";
allowchars += includesNumbers ? numberChars :"";
allowchars += includeSymbol ? symbolsChars :"";
if(length <=0){
    return `(password length must be atleast 1)`;
}
if(allowchars.length === 0){
    return `(at least one set of character needs to be selected)`;

}  

for(let i=0 ; i< length ; i++){
    const randomIndex  = Math.floor(Math.random()* allowchars.length);
    password += allowchars[randomIndex];
}
return password;
}

const passwordLength = 6;
const includesLowercase = true;
const includeUppercase = true;
const includesNumbers = true;
const includeSymbol = true;

const password = generatePassword(passwordLength,
                               includesLowercase,
                               includeUppercase,
                               includesNumbers,
                               includeSymbol);
console.log(`generate password : ${password}`);