// array in objects
 

const fruits  =[{name:"apple",color:"red",colories:95},
                {name:"banana",color:"yellow",colories:105},
                {name:"orange",color:"orange",colories:112},
                {name:"papaya",color:"yellow",colories:96}];

                //  fruits.push({name:"grapes",color:"green",colories:133})
                // fruits.pop()
                // fruits.splice(1,2)
                console.log(fruits);


 // -----------------forEach-------------------


 fruits.forEach(fruits=> console.log(fruits.colories));

//  ------------------map-----------------------

const fruitname = fruits.map(fruits=> fruits.name)
console.log(fruitname);

// -----------------filter()------------------

const yellowcolor = fruits.filter(fruits=>fruits.color ==="yellow");
const lowCalFruits = fruits.filter(fruits=>fruits.colories <100);
console.log(yellowcolor);
console.log(lowCalFruits);



// ------------------reduce()------------------

const maxFruit = fruits.reduce((max,fruits) =>
                             fruits. colories>max.colories?
                               fruits:max);
console.log(maxFruit);