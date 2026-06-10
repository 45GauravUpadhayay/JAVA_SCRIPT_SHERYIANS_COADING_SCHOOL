//* The this Keyword Special Keyword 

//? this -> special special word

//* this keyword ek special keyword hai, kyuki jaise ki bake sare keyword ki value ya unka nature same rahta hai this ki value ya nature badal jata hai is bat se ki aap use kaha use kar rahe ho

//? global scope me this ki value -> window

//* window hai Prime Minister

//? Global Scope -> this ki value window

// console.log(this);

//* function scope me this ki value -> window

// function abcd () {
//     console.log(this);
// }
// abcd();

//? Method ke andar this ki value -> Object but yah arraow function ke andar nahi chalti hai

//* Agar hamne jo obj ke andar function banaya hai uske andar bhi ham ek aur function bana denge to hame this ki value window milegi isse bachne ke liye hamko andar vale function ke andar ek arrow function banana padega

// let obj = {
//     name: "Gaurav Upadhayay",
//     sayName: function () {
//         console.log(this);
//     },
// };

// obj.sayName();


// let obj = {
//     name : "Gaurav Upadhayay",
//     age : 16,
//     sayName: function(){
//         console.log(this.age);
//     },
// };
// obj.sayName();

let obj = {
    name: "Gaurav Upadhayay",
    age : 16,
    sayName: function (){
        // function defg (){
        //     console.log(this)
        // }
        // ham arraow function banayege

        let defg = () => {
            console.log(this)
        }

        defg();
    }
}

obj.sayName();

//? Event Handler me this ki value -> isme this ki value vahi hoti hai jispar event Handler laga hai

// let h1 = document.querySelector("h1");
// h1.addEventListener("click", function(){
//     console.log(this.style.color = "red")
// })

//* class ke andar this ki value -> blank object hoti hai jab ham use new keyword ke sath use ypuse karte hai

class Abcd {
    constructor(){
        console.dir("heyehy");
        this.a = 12;
    }
}

let val = new Abcd();