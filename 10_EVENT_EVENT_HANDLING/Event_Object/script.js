//* Event Object -> id par click karne par jo function ki jo value milti hai dets ya jo bhi aap likhe use event Object kahte hai

let abcd = document.getElementById("abcd");

abcd.addEventListener("click", (dets) => {
    console.log(dets);
})

//* target -> jis par click hua and jis par action hua tha

//* type -> aapne target par kiya kiya tha vahi type hota hai jese aaone is par click kiya tha yah ek type

//* preventDefault -> form ko submit hone par use refresh hone se ya reload hone se rokne ke liye preventDefault ka use hota hai

