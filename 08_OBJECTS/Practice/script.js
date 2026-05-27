//* Create an Object for a Student with name, age and isEnroled.

// const { use } = require("react");

// let obj = {
//     name : 'Gaurav Upadhayay',
//     age : 16.5,
//     isEnrolled : true,
// }

//* Can an Object key be a number or Boolean ? try this

// const obj = {
//     true : "Yes",
//     42 : "Answer",
// }

// console.log(obj[42]); 

//* Access the value of "FirstName" from this object

// const user = {
//     "first-name" : 'Gaurav',
// }

// console.log(user["first-name"])

//* Given a dynamic key let key = "age" , how will you access user[key]

// let key = "age";

// const user = {
//     age : 16.5,
// }

// console.log(user[key])

//* From the Object below, print the latitude

// const locations = {
//     city : "Agra",
//     coordinate : {
//         lat : 23.2,
//         lng : 77.4,
//     },
// };

// console.log(locations?.coordinate?.lng);

//* Destructured the key "first-name" as a variable called firstName

// const user = {
//     "first-name" : "Gaurav",
// };

// let {"first-name" : firstName} = user;
// console.log(firstName);

//* Use for-in loop to all key print

// const course = {
//     title : "Java Script",
//     duration : "4 weeks",
// }

// for(let key in course){
//     console.log((key));
// }

// console.log(Object.entries(course).forEach((val) => {
//     console.log(val);
// }))

// console.log(Object.entries(course).forEach((val) => {
//     console.log(val[0] + ": " + val[1])
// }))

//* Deep Clone the obj1 sasafelhy.

// const obj1 = {info : { score: 80}};
// let newobj = JSON.parse(JSON.stringify(obj1));
// newobj.info.score = 100;
// console.log(newobj)
// console.log(obj1)

//* Use a Variable to dynamicaly asign a property

const key = "role";
let obj = {
    name : "gaurav",
    [key] : "admin",
}
console.log(obj)