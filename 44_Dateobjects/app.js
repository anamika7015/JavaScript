// Date objects = objects that contains values that represent dates 
// dates and times
// these date objects can be changed and formatted

//  Date(year , month, day, hour,minute, second, ms)
// const date = new Date(2024,11,0,4,6,7,3);
// const date = new Date("2024-01-02T12:00:00z");
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const dayofweek = date.getDay();
console.log(year);
console.log(day);
console.log(month);
console.log(hour);
console.log(minute);
console.log(second);
console.log(dayofweek);

// ----------compare date
const date1 = new Date("2023-12-02");
const date2 = new Date("2024-01-01");
if(date2>date1){
    console.log("HAPPY NEW YEAR!");
}