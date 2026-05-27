//* Let's Start a Object

//? Create a Object

// let obj = {
//     name : "Gaurav Upadhayay",
//     age : 16.5,
//     collage : "Dr Bheem Rav Ambedkar University Agra",
// };

//? Acses the Object

// console.log(obj.age);
// console.log(obj.name);
// console.log(obj.collage);

// console.log(obj);

//* Nesting and Deep Accses

// const user = {
//     address : {
//         city : "Agra",
//         pin : 283201,
//         location : {
//             lat : 23.2,
//             lng : 77.4,
//         },
//     },
// }

// console.log(user.address.location.lat)   

//* Objects Destructuring

// let {lat,lng} = user.address.location;
// console.log(lng)

//* Looping

// let obj = {
//     name : "Gaurav Upadhayay",
//     age : 16.5,
//     email : "45upadhayaygaurav264@gmail.com",
// }

//* for-in

// for(let key in obj) {
//     console.log(key, obj[key]);
// };

//* Copying Object 

// let obj2 = {...obj};
// console.log(obj2)

//* Object Assign

// let obj2 = Object.assign({}, obj);
// console.log(obj2)

// let obj2 = Object.assign({price : Infinity}, obj)
// console.log(obj2)

//*  Deep Clone

// let obj = {
//     name : "Gaurav Upadhayay",
//     age : 16.5,
//     email : "45upadhayaygaurav264@gmail.com",
//     address : {
//         city : "Agra",
//     },
// };

//* Nested Object me Copy karne se hame nested object ka refrence milta hai na ki real value

// let obj2 = {...obj}
// obj2.address.city = "Indore";
// console.log(obj2); // isme To Indor
// console.log(obj); // but isme bhi indor ho jata hai

//* Isliye ham deep clone karte hai
// let obj2 = JSON.parse(JSON.stringify(obj));

// console.log(obj2);
// obj2.address.city = "Indore";
// console.log(obj2); // Indore
// console.log(obj); // Agra

//* Optional Chaning, computed Properties

// console.log(obj?.address?.city) // erroe se bacne ke liye isme ab undefind aayega

//* Computed Properties

let role = "admin";

let obj = {
    name : "Gaurav Upadhayay",
    age : 16.5,
    email : "45upadhayaygaurav264@gmail.com",
    address : {
        city : "Agra",
    },
    [role] : "Harsh",
};

console.log(obj);