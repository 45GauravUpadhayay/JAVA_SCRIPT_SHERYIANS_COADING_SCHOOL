//* setTimeout -> function kitni der me chalna chahiye

//? setInterval -> har time jo aap doge bar bar chalta hai

// setTimeout(() =>  {
//     console.log("Gaurav Upadhayay")
// },4000);

// setInterval(() => {
//     console.log("Gaurav Upadhayay")
// }, 5000);

let count = 10;
let interval =  setInterval(() => {
    if(count >= 1) {
        count--;
        console.log(count);
    }
    else{
        clearInterval(interval);
    }
},1000)