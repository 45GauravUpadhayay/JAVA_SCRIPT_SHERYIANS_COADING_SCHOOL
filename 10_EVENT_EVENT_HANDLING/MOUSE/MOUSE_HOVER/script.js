const abcd = document.getElementById('abcd');

console.log(abcd)

abcd.addEventListener("mouseover", () => {
    console.log("hover hua");
    abcd.style.backgroundColor = 'red';

});

abcd.addEventListener("mouseout", () => {
    abcd.style.backgroundColor = "yellow"
})