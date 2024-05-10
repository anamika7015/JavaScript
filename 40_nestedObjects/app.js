//  nested objects = objects inside of other objects
// Allows you to represent more complex data structures
// child object is enclosed by the parent object 

//  person{address{}, contactInfo{}}
// ShoopingCart{keyboard{}, Mouse{},Moniter{}}

const person ={
    fullname : "patrick",
    lastname :"star",
    isStudent : true,
    hobbies :["karate","jellyfishing","cooking"],
    address :{
        street : "124 conch st.",
        city :"bikini bottom",
        country : "Int. water"
    }
}

for( const property in person.address){
    console.log(person.address[property]);
}
// console.log(person.fullname);
// console.log(person.lastname);
// console.log(person.hobbies);
// console.log(person.address);


//  -------------------example----------------
 


class person1{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

 class Address{
    constructor( street , city, country){
        this.street = street;
        this.city = city;
        this.country = country;

    }
 }
 
 const person2 = new person1("patrick",30,"124 conch st.",
                                         "bikini bottom",
                                        "Int. water");
console.log(person2.age);