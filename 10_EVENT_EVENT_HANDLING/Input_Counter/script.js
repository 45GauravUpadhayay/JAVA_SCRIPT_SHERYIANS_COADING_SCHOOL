let inp = document.querySelector("input");

let sapn = document.querySelector("span");

inp.addEventListener("input", () => {
    // console.log("input hua")
    // console.log(inp.value.length);

    // sapn.textContent = inp.value.length;

    let left = 20 - inp.value.length;
    sapn.textContent = left;

    
    if(left < 0){
        sapn.style.color = "red";
    }
    else{
        sapn.style.color = "white";
    }
})