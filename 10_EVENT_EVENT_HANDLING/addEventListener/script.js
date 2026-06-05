//* Event Binding -> .addEventListener, .removeEventListener

//? Browser mein page par koi harkat karo event raise jo jayega

//? kuchh screen par ho aur aapko reaction dena ho to us waqt hame event hendal karna aana chaiye

//* event -> koi action hua
//* eventListener -> aapne koi action ka reaction diya

let h1 = document.querySelector("h1");
h1.addEventListener("click", (val) => {
    // h1.style.color = "red"
    h1.classList = "h1";
})

let p = document.querySelector("p");
p.addEventListener("dblclick",dblclick);
p.removeEventListener("dblclick", dblclick);
function dblclick (){
    p.classList = "para"
}