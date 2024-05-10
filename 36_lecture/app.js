//  inheritance = allows a new class to inherit properties and methods
//  from an existing class (parents -> child)
//  helps with code reuseability


class animals {
    alive = true;
     eat(){
        console.log(`this ${this.name}is eating`);
     }
     sleep(){
        console.log(`thi ${this.name} is sleeping`);
     }
}
class rabbit  extends animals{
    name =  "rabbit";
}
class  Fish extends animals{
    name =  "fish";
}
class Hawk  extends animals{
    name =  "hawk";
}
const Rabbit = new rabbit();
console.log(Rabbit.alive);
const fish = new rabbit();
console.log(fish.alive);
const hawk = new rabbit();
console.log(hawk.alive);

hawk.eat();
hawk.sleep();