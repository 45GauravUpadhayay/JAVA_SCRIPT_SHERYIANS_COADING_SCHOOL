//* Agar hame koi cheej esi banani hai jisme jo bhi banaye usme ek ya 2 cheej same rahe to uske liue prototype ka youse karte hai

//? Isme Company Same hai -> Sheryians


//? Agar hamare Constractor Function me koi field apne prototype par attach kar de to us Constractor se banne bale sabhi new instanses yani ki Objects ke pass wo fields automaticaly chali jati hai

// function CreatePencil(name,price,qty,color){
//     this.name = name;
//     this.price = price;
//     this.qty = qty;
//     this.color = color;
//     this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color;
//         document.querySelector("body").append(h1);
//     }
// }

// CreatePencil.prototype.company = "Sheryians";

// let pencil1 = new CreatePencil("Nataraj", 10, 1, "blue");


function CreatePencil (name,price,qty,color){
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.color = color;
}

CreatePencil.prototype.write = function (text){
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.append(h1);
}

let pencil1 = new CreatePencil("Nataraj", 10, 10, "black");

let pencil2 = new CreatePencil("Doms", 10, 10, "red");
