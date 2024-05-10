// class = (ES6 feature)  provides more more structured and clear way to
// worl with cbjects compared to triditional constructor function
// ex. static keyword, encapsulation , inheritance

class product {
    constructor(name,price){

        this.name = name;
        this.price = price;
        
    }
    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`price : $${this.price.toFixed(2)}`);
    }
    calculateTotal(saletax){
        return this.price+(this.price*saletax);
    }
}
const saletax = 0.05;

const product1 = new product("shirt",99.9);
const product2 = new product("pants",99.9);
const product3 = new product("jacket",39.9);
//  product1.displayProduct();
//  product2.displayProduct();
 product3.displayProduct();
 
 const total = product3.calculateTotal(saletax);
 console.log(`total price with tax : $${total.toFixed(2)} `);