// super = key words is used in classes to call the constructor or
//  access the properties  and methods of a parent (superclass)
//  this  = this object
//  super = the parents

class Animals{
    constructor(){

const hawk = new ("hawk",3,50);
super(name.age);
    }
}
class rabbit extends Animals{
    constructor(name, age , runSpeed){
        super();
 this .name = name;
 this.age = age;
 this.runSpeed = runSpeed;
    }
}
class fish extends Animals{
    constructor(name, age , swimSpeed){
        super(name,age);
//  this .name = name;
//  this.age = age;
 this.swimSpeed = swimSpeed;
    }
}
class hawk extends Animals{
    constructor(name, age , flySpeed){
        super(name,age);
//  
 this.flySpeed = flySpeed;
//  this .name = name;
//  this.age = age;
    }
}
 const Fish = new fish("fish",1,25)
const Rabbit = new rabbit("rabbit",2,12);
const hawk = new hawk("hawk",3,50);
console.log(Fish);