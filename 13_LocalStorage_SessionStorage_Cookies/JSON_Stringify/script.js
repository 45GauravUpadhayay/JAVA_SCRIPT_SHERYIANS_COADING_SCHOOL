//* local storage me sirf string ka data sote hota hai 

//? localStorage me array and object ko store karne ke liye pahle unhe hame string me badlana padega jo ki JSON.Stringify karta hai

localStorage.clear();

localStorage.setItem("friends", JSON.stringify(['Rohit', "Mohit", "Anuj", "Akash"]));

let val = localStorage.getItem("friends");
let arr = JSON.parse(val);