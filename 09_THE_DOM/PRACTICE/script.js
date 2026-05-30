//* What is the DOM? How does it represent the HTML structure?

//? html me likhi jane vali sasbhi cheej tree yani DOM ek tree jesa Structure hota hai and yah as a tree html me represented karta hai

//* Name the types of nodes in the DOM tree.

//? element node, text node, comment node and many more

//* Inspect the following HTML in the browser and identify each node:

//* What is a Difference between getElementById and querySelector?

//? getElementById -> yah keval id hi select karta hai yaha id select karne par # nahi lagate hai

//? querySelector -> yah tag ko select karta hai id , tag , class all of jo bhi hota hai yaha id select karne par # lagate hai because yah class bhi select kar sakta hai

//* What does getElementClassName return? Is it an array?

// let color = document.getElementsByClassName("color");
// console.dir(color);

//? HTML Collection return karta hai

//* Use querySelectorAll to select all buttons with clas ".buy-now";

    let buy = document.querySelectorAll("buy-now");
    
    console.log(buy);