//  static = keywords  that defines properties or metthods that belongs
//  to a class itself rather than the objects created
// from that class (class owns anything static, not the object)

class user{
   static usercount = 0;
    
   constructor(username){
    this.username = username;
    user.usercount++;

   }
   static getUserName(){
    console.log(`there  are ${user.usercount} user online`);

   }
   sayHello(){
    console.log(`Hello, my user name is ${this.username}`);
   }
}
const user1 = new user("anamika");
const user2 = new user("patrick");
const user3 = new user("sandy");
user1.sayHello();
user2.sayHello();
user3.sayHello();
user.getUserName();