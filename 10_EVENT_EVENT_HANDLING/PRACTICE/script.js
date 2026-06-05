let btn = document.querySelector("#btn");
let file = document.querySelector("#file");


btn.addEventListener("click", () => {
    file.click();
});


file.addEventListener("change", (det) => {
    const file = det.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
})