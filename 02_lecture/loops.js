for(let i=0;i<=10;i++){
    const element =i;
    if(element==5){
        // console.log("5 is best number");
    }
    // console.log(element);
}


//            while

let index =0
while(index<=10){
    // console.log(`value of index is ${index}`);
    index = index+2
}


let myarray =["flash","batsman","superman"]
let arr =0;
while(arr<myarray.length){
// console.log(`value is ${myarray[arr]}`);
arr = arr+1
}


//                          DO WHILE LOOPS 
let score =11
 do{
//     console.log(`scoreis${score}`);
    score++
}while(score<=10)

//           FOR OF

const array = [1,2,3,4,5]
for (const num of array) {
    // console.log(num);
    
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(greet);
}
 

//           maps = unique values
const map = new Map()
map.set('In',"India")
map.set('USA',"United state of America")
map.set('Fr',"France")
map.set('In',"India")
// console.log(map);
for (const [key,value] of map) {
    // console.log(key,':-' ,value);

}
 
//                                            for in loops


const myObject = {
    js : 'javascript',
    cpp: 'c++',
    rb :"ruby",
    swift: "swift by apple"

}
 for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
        
    }
 
const programming =["js","rb","py","java"]
for (const key in programming) {
//    console.log(programming[key]);
//    console.log(key);
    }

    //                       for each loop
    const coding = ["rb","js","java","python","cpp"]
    coding.forEach( function (val){
        // console.log(val);
    } )

    const myNums = [1,2,3,4,5,6,7,8,9]
    // const newNums = myNums.filter((num)=>{
    //     return num>4
//     }
// )
  
const newNums = []
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
 console.log(newNums);


    
