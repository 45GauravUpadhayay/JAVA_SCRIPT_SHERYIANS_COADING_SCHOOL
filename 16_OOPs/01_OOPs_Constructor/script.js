//* Hame Seekhna hai factories banana, matlab ki aap ek bar blueprint bana do ki har object kesa dikega and ham log naye naye objects and different value ke bana payege, yahi uper uper se pura kaam hai oops me

//? new ki value hoti hai blank Objects and jo function ke andar this hai vese to uski value window hoti hai but jab ham new ka youse karte hai tab this ki value vahi blank object ho jati hai

function CreateBisuits(name,price,qty,company,category){
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.company = company;
    this.category = category;
}

let biscuit1 = new CreateBisuits("Oreo", 10, 5, "Cadbary", "Chocolate");

let biscuit2 = new CreateBisuits("Fantasy", 20, 3, "Parle", "Chocolate Filled");



// function CreatePencil(name,price,color,company){
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company;
// }

// let pencil1 = new CreatePencil("Nataraj", 10, "black", "nataraj");

// let pencil2 = new CreatePencil("Doms", 10, "Blue", "Doms");

//* use Case

//? manllo aapko pencil 2 se kuch likhna hain and uska color blue hona chaiye and pencil1 ka color red


function CreatePencil(name,price,color,company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.querySelector("body").append(h1);
    }
}

let pencil1 = new CreatePencil("Nataraj", 10, "red", "nataraj");

let pencil2 = new CreatePencil("Doms", 10, "Blue", "Doms");

