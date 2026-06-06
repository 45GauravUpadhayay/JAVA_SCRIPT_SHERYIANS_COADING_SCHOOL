//* Event Capturing -> yah event Bubbling ka Ulta hota hai

//? isme pattern uper se neche aata hai

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let button = document.querySelector("button");

// button.addEventListener("click", () => {
//     console.log("Button Clicked");
// })

// c.addEventListener("click", () => {
//     console.log("c Clicked");
// })

// b.addEventListener("click", () => {
//     console.log("b Clicked");
// })

// a.addEventListener("click", () => {
//     console.log("a Clicked");
// })

button.addEventListener("click", () => {
    console.log("Button Clicked");
})

c.addEventListener("click", () => {
    console.log("c Clicked");
}, true); // capture phase 

b.addEventListener("click", () => {
    console.log("b Clicked");
})

a.addEventListener("click", () => {
    console.log("a Clicked");
},true); // capture phase


//* isme pahle a par jayega a par kon sa phase hai capture phase and fir b par jayega b par bubble phase hai use chod do and fir c par c ek capture phase hai vah chalega and fir button chalega 

//* capture phase -> first a chalega , second c chalega

//* bubble phase -> button par clicked , b 

//? a clicked, c clicked and button clicked and b clicked

