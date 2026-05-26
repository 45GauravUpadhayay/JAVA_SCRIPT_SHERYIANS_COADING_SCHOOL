//* ROCK-PAPER-SCISSORS LOGIC

function rps(user, computer){
    // if (user === "rocks" && computer === "Scissors") return "user";
    // else if (user === "Scissors" && computer === "rocks") return "computer";
    // else if (user === "paper" && computer === "rocks") return "user";
    // else if (user === "rocks" && computer === "paper") return "computer";
    // else if (user === "Scissors" && computer === "rocks") return "computer";
    if (user === computer) return"Draw";
    else if (user === "rocks" && computer === "Scissors") return "user";
    else if (user === "Scissors" && computer === "paper") return "user";
    else if (user === "paper" && computer === "rocks") return "user";
    else return "computer";

}


console.log(rps("rocks", "rocks"));