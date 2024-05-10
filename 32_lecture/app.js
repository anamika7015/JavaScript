//  this  = reference to the objects whhere THIS is used 
// ( the objects depends on the immediate context)
// person.name= this.name
//  this method cannot be used in arrow function


const person1 = {
    firstName: "Patrick",
    favFood : "hamburger",
    sayHello :function(){console.log(`hey, i am ${this.firstName}`)},
    eat : function() { console.log(`${this.firstName} is eating ${this.favFood}`)},
}
const person2 = {
    firstName: "Pandey",
    favFood : "pizza",
    sayHello :function(){console.log(`hey, i am ${this.firstName}`)},
    eat : function() { console.log(`${this.firstName} is eating ${this.favFood}`)},
}
person2.sayHello();
person2.eat();

person1.sayHello();
person1.eat();