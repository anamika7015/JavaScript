// Promise = An operation that manages asynchronous operations
//          wrap a promise object around (asynchronous code)
//          "I promise to return the value"
//           PANDING ->RESOLVED OR REJECTED
//           new promise((resolve,reject)=> {asynchronous code})


// DO THESE CHORES IN ORDER
// 1 WALK THE DOG
// CLEAN THE KITCHEN
// TAKE OUT THE TRASH

function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogwalked = true;
            if(dogwalked){

                resolve("you walk the dog🐕‍🦺");
            }
            else{
                reject("you don't walk the dog");
            }
        },1000);
    });
}
function cleanthekitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const kitchencleaned = true;
            if(kitchencleaned){

                resolve("you clean the kitchen🧹");
            }
            else{
                reject("you dont clean the kitchen");
            }
        },2000);
    });
}
function takeouttrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const outtrashed = true;
            if(outtrashed){

                resolve("you take out the trash ♻️");
            }
            else{
                reject("you dont take out the trash");
            }
        },500);
    });
}
walkDog().then(value =>{console.log(value);return cleanthekitchen()})
         .then(value =>{console.log(value); return takeouttrash()})
         .then(value =>{console.log(value); console.log("you finish all the chores");})
         .catch(error =>console.error(error));// for false value