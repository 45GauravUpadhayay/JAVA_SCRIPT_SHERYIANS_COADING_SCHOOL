// const { createElement } = require("react");

// const { createElement } = require("react");

let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", (dets) => {
    dets.preventDefault();
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", input[0].value);

    let h2 = document.createElement("h2");
    h2.textContent = input[1].value;
    let h5 = document.createElement("h5");
    h5.textContent = input[2].value;
    let p = document.createElement("p");
    p.textContent = input[3].value;

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h2);
    card.appendChild(h5);
    card.appendChild(p);


    main.appendChild(card);

    input.forEach((inp) => {
        if(inp.type !== 'submit'){
        inp.val = "";
        }
    });
});