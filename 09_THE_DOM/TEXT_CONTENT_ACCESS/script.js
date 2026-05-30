//* Text/Content access : innerText, textContent, innerHTML

// let h1 = document.querySelector("h1");
// console.dir(h1);
// h1.textContent = "Hello Gaurav Kese Ho";

// h1.innerHTML = "Gaurav Badiya Hai";
// h1.innerText = "Gaurav Kese Ho";

//? innerHTML -> main html file ke andar se html ko change karna

let h1 = document.querySelector("h1");
h1.innerHTML = "<i>hey</i>";
console.dir(h1);
// element ko hidden karna
h1.hidden = true;