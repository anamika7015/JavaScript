// getter = special property that makes a property readable
// setter = special property that makes a property writeable

// validate and modify a value when reading/ writing a property

// class rectangle{
//     constructor(height,width){
//         this.height = height;
//         this.width = width;
//     }
//     set height(newHeight){
//         if(newHeight>0){
//          this._height = newHeight;
//         }
//         else{
//             console.error("height must be a positive number");
//         }

//     }
//     set width(newWidth){
//         if(newWidth>0){
//          this._width = newWidth;
//         }
//         else{
//             console.error("width must be a positive number");
//         }


//     }
//     get height(){
//         return this._height;
//     }
//     get width(){
//         return this._width;
//     }
// get area(){
    // return this._height*this._width;
// }
// }
// const Rectangle = new rectangle(3,4);
// console.log(Rectangle.height);
// console.log(Rectangle.width);
// console.log(Rectangle.area);

//             second example

class person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    set firstName(newFirstName){
        if( typeof newFirstName === "String"&& newFirstName.length>0){
 
            this._firstName = newFirstName;
        }
        else{
            console.error("firstname must be non empty set");
        }
    }
    set lastName(newLastName){
        if( typeof newLastName ==="String"&& newLastName.length>0){
 
            this._lastName = newLastName;
        }
        else{
            console.error("lastname must be non empty set");
        }
    }
    set age(newage){
        if( typeof newage ==="number" && newage>=0){
 
            this ._age=newage;
        }
        else{
            console.error("age must be non empty set");
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    // get age(){
    //     return this._age;
    // }
}
const Person = new person("anamika","pandey",18);
console.log(Person.firstName);
console.log(Person.lastName);
console.log(Person.age);