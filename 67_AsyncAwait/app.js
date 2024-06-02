// async/ await = Async = make a function return a promise
//                Await = makes an async function wait for a promise

//              Allows you write asynchronous code in a synchronous manner
//           Async doesnot have resolve or reject parameters
//            Everything after Await is placed in an event queue

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
            const outtrashed = false;
            if(outtrashed){

                resolve("you take out the trash ♻️");
            }
            else{
                reject("you dont take out the trash");
            }
        },500);
    });
}

async function dochores() {
    try{

    
    const walkDogresult= await walkDog();
    console.log(walkDogresult);

    const cleankitchenResult = await cleanthekitchen();
    console.log(cleankitchenResult);
    const takeouttrashresult = await takeouttrash();
    console.log(takeouttrashresult);

}
catch(error){
    console.error(error);
}
}

dochores()