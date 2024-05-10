// constructeor = special method for defining  the  properties
//  and methods of objects

function car(make, model , year, color) {
    this.make = make,
    this.model = model,
     this .color = color,
     this.year = year,
     this.derive = function() {console.log(`you derive the ${this.model}`)}
}
const car1 = new car("ford","mustang",2024,"red");
const car2 = new car("chevrolet","camaro",2025,"blue");
const car3 = new car("Dodge","charger",2026,"black");

car1.derive();
car2.derive();
car3.derive();
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);


console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);


console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

