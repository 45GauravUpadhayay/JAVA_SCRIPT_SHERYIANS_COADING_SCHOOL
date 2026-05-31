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

    // let buy = document.querySelectorAll(".buy-now");

    // console.log(buy);

//* T1: Select the heading of a page by ID and change its text to "Welcome to Sheryians!".

// let heading = document.querySelector("#heading");
// heading.style.color = "red";
// heading.textContent = "Welocome to Sheryians!";
// console.dir(heading);

//* Select all <li> elements and print their text using a loop.

// let lis = document.querySelectorAll("li");
// lis.forEach(function(val) {
//     console.log(val.textContent);
// })

// let lis = document.querySelectorAll("li");
// for(let i = 0; i<lis.length; i++){
//     console.log(lis[i].textContent);
// }

//* What is a defference between innerText, textContent, and innerHTML ?

//? innerText, textContent -> yah HTML ke andar ke text ko badlte hai

//? innerHTML -> yah html ko change kar sakta hai

//* When Should you use textContent instend of innerText?

//? textContent -> yah fast hota hai and yah sara content nikal kar deta hai jo visible nahi hota hai use bhi nikal kar deta hai 

//? innerText -> yah slow hota hai and yah vahi content nikal kar deta hai jo visible hota hai 

//* Select a Paragraph and replace its content with: { <b>Updated</b> by java script }

// let p = document.querySelector("p");
// p.innerHTML = "<b>Updated</b> by java script";

//* How do you get the src of an Image using JavaScript?

// let img = document.querySelector("img");
// console.log(img.getAttribute("src"));

    // let img = document.querySelector("img");
    // img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1700580343711-c98b762783a9?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    //* Select a link and update its href to point to https://sheryians.com.

    // let a = document.querySelector("a");
    // console.dir(a.getAttribute = "href");
    // a.href = "https://sheryians.com"

    //* Add a title attribute to a div dynamicaly

    // let div = document.querySelector("div");
    // div.setAttribute("title", "Some Info")

//* Remove the disabled attribute from a button

// let button = document.querySelector("button");
// button.removeAttribute("disabled");

//* What does CreateElement() do? what's returned?

//? yah ek element craete karke deta hai and yah HTML node return karta hai ya html element 

// let h1 = document.createElement("h1");
// console.log(h1);

//* What's a defference between appendChild and PrependChild

//? appendChild -> yah hamesa last me element ko add karta hai 
//? prependChild -> yah hamesa suruvat me element ko add karta hai

//* Can Yor Remove an element using removeChild()?

// document.querySelector("div").removeChild(elementNode);

//* Create a new List item <li>New Task</li> and add it to a <ul>.

// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "New Task"

// ul.appendChild(li);

//* Create a New image element with a Placeholder source and add it at the top ofn a div.

// let img = document.createElement("img");
// img.setAttribute("src", "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")
// let div = document.querySelector("div");
// div.prepend(img);
// let body = document.querySelector("body");
 // body.style.backgroundColor = "Black"; // body.style.Color = "White";

//* Select the first item in a list and delete it from the DOM.

// let ul = document.querySelector("ul");
// let li = document.querySelector("li");
// ul.removeChild(li);

//* Add a Highlight class to every even item in a list.

// let li = document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach((ele) => {
//     ele.classList.add("highlight")
// })

//*  Toggle a class active on a button when clicked (Hint: use classList.toggle()).

//* Set the font size of all <p> elements to 18px using style.

let p = document.querySelectorAll("p");
p.forEach((ele) => {
    ele.style.fontSize = "20px";
})