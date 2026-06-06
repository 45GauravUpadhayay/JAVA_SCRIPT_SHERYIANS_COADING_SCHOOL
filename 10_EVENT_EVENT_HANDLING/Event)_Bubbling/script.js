//* Event Bubbling -> jispe event aayega agar uspar listner nahi hua to hamara event uske event par listiner dudega esa karte karte uper ke taraf move karega

// document.querySelector("#main").addEventListener("click", () => {
//     alert("Clicked");
// })


//? agar me navbar par click karuga to alert aayega clicked and agar me button ya fir a par bhi click karuga to uspar to eventListener nahi lag raha hai to to parent par chek hoga uspar lag raha hai isliye clicked alert aajayega

///* yahi hai event Bubbling kahte hai

document.querySelector("ul").addEventListener("click", (dets) => {
    // dets.target.style.textDecoration = "line-through";
    dets.target.classList.toggle("lt")
})