// objects = a collection of related properties and/ or methods
//  can represent real world objects (people, products, places)
//    objects = {key: value,
//               function()}

const person1 = {
    firstName: "Anamika",
    lastName : "pandey",
    age: 18,
    isEmployed : true,
    sayHello : function(){console.log("hi, i am anamika pandey")},
       eat : function(){console.log("i am eating icecream")},
}
const person2 ={
    firstName: "Patrick",
    lastName : "star",
    age :25,
    isEmployed : false,
    sayHello :()=>console.log("hey, i am patrick"),
    eat : () => console.log("i am eating pizza"),
}

person1.sayHello();
person2.sayHello();

person1.eat();
person2.eat();
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);


console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
