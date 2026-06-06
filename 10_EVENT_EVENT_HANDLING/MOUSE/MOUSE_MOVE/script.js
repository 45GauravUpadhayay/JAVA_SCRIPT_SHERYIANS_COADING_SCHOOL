let abcd = document.getElementById("abcd");

window.addEventListener("mousemove", (dets) => {
    abcd.style.top = dets.clientY + 'px';
    abcd.style.left = dets.clientX + 'px';

});

abcd.addEventListener("mousemove", () => {
    abcd.style.backgroundColor = "yellow";
})

abcd.addEventListener("mouseout", () => {
    abcd.style.backgroundColor = "red";
})