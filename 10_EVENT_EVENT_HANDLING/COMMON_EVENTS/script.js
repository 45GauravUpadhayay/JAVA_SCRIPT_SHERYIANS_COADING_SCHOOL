//* Common events: click, input, change, submit, mouseover, keyup

// let inp = document.querySelector("input");
// inp.addEventListener("input", (e) => {
//     if(e.data != null){
//     console.log(e.data);
//     }
// })

// let sel = document.querySelector("select");
// let h1 = document.querySelector("h1");

// sel.addEventListener("change", (val) => {
//     h1.textContent = `${val.target.value} Device Selected`;
//     h1.style.color = "green";
// })


//* ****************************    *********************


//* Approch -> type -> screen -> window

let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(dets){
    console.log(dets)
    if(dets.key === " "){
        h1.textContent = "space"
    }
    else{
    h1.textContent = dets.key; 
    }
})