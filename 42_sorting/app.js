// sort() = method used to sort the elements of an array in place,
//         sorts elements as a string in lexicographic order , not alphabatical
//        lexicographic = (alphabat + numbers + symbols) as string

// let fruits =["banana","apple","orange", "grapes","coconut","pineApple"];
// let numbers = [1,5,7,8,4,3,9,0,3,2]
// fruits.sort();
// numbers.sort();
// numbers.sort((a,b) => a-b);
// console.log(fruits);
// console.log(numbers);

const people = [{name:"ram",age:32,gpa:3.2},
{name:"akhil",age:38,gpa:1.5},
{name:"krishna",age:50,gpa:1.2},
{name:"vaibhav",age:16,gpa:2.5}]
// people.sort((a,b) => b.age-a.age);
people.sort((a,b) => a.name.localeCompare(b.name));

console.log(people);





