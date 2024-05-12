//  closure = a function  defined inside of another function,
// the inner function has access to the variables 
// and scope of the outer function.
//  Allow for private variables  and state maintenance
//  used frequently in js framework : React ,Vue,Anguler

function createCount() {
    let count = 0;
    function increment() { 
        count++;
        console.log(`count increased ${count}`);
        
    }
    function getcount() {
        return count;
        
    }
    return {increment,getcount};
    
}
 const counter  = createCount();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`the current count is ${counter.getcount()}`);

// example 2
function createGame() {
    
    let score = 0;
    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
        
    }
    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
        
    }
    return {increaseScore,decreaseScore}
}
const game = createGame();
game.increaseScore(3);
game.decreaseScore(2);

