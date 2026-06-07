let nm = document.querySelector("#name");
let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");


form.addEventListener("submit", (dets) => {
    dets.preventDefault();

    // if(nm.value.length <= 2){
    //     document.getElementById("hide").style.display = "initial"
    // }
    // else{
    //     document.getElementById("hide").style.display = "none"
    // }

    const Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let ans = Regex.test("45upadhayaygau@@gmail.com");
    console.log(ans);
})