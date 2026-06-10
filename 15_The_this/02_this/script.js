//* this call apply bind sath me padhe jate hai

//? call -> function ko call karte waqt ham set kar sakte hai ki this ki value kya hogi

// let obj = {
//     name: "Gaurav Upadhayay",
//     age: 16,
// }

// function abcd () {
//     console.log(this.age)
// }

// abcd.call(obj);

//* Call me ham 1 se jyda jyda parameter de sakte hai

// let obj = {
//     name: "Gaurav Upadhayay",
//     age:17,
// }

// function abcd(a, b, c){
//     console.log(this,a,b,c);
// }

// abcd.call(obj,1,2,3);

//? Apply me ham 2 se jyda parameter nahi de sakte hai

// let obj = {
//     name : 'Gaurav Upadhayay',
//     age:17.5,
// }

// function abcd (a,b,c) {
//     console.log(this, a,b,c)
// };

// abcd.apply(obj, [1,2,3]);

//* bind function ko chalata nahi hai yah copy banata hai and yah apni copy ko new function k=me store kar leta hai

// let obj = {
//     name : "Gaurav Upadhayay",
//     age : 17.5,
// }

// function Gaurav(a,b,c){
//     console.log(this,a,b,c)
// }

// let fnc = Gaurav.bind(obj,1,2,3);
// fnc();

