// JSON = (javascript object Notation) data-interchange format
//       used for exchanging data from server and a web application
//       JSON files{key:value} or [value1,value2,value3]

//        JSON.stringify() = convert ajs object to a JSON string
//       JSON.parse() = converts a json string to a js object


// const names = ["anamika","shivanand","neha","vaibhav"];
// const person ={
//     "name": "anamika",
//     "age": 18,
//     "isemployed": true,
//     "hobbies":["reading book","watching movie"]
// }
// const people = [{
//     "name": "anamika",
//     "age": 18,
//     "isemployed": true
// },
// {
//     "name": "vaibhav",
//     "age": 13,
//     "isemployed": false
// },
// {
//     "name": "sani",
//     "age": 21,
//     "isemployed": true
// },
// {

//     "name": "ved miter",
//     "age": 24,
//     "isemployed": true
// }
// ]
// const jsonString = JSON.stringify(people);
// console.log(people);

const jsonnames = `["anamika","shivanand","neha","vaibhav"]`;
const jsonperson = `{"name": "anamika","age": 18,"isemployed": true,"hobbies":["reading book","watching movie"]}`;
const jsonpeople = `[{"name": "anamika","age": 18,"isemployed": true},
                 {"name": "vaibhav","age": 13,"isemployed": false},
                 {"name": "sani","age": 21,"isemployed": true},
                 {"name": "ved miter","age": 24,"isemployed": true}]`;
const parseString = JSON.parse(jsonpeople);
// console.log(parseString);


fetch("people.json")
.then(Response => Response.json())
// .then(value => console.log(value))
.then(values => values.forEach(value =>console.log(value.isemployed)))