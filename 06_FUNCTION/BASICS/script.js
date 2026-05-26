//* What WHY HOW Function

//? What Function

//* agar code Likh diya to wo turant chal jata hai

// console.log('Gaurav'); turant chal jata hai

//? but function means -> hum jab button dabaye tab code performe kar 

// function dance(){
//     console.log("Dance");
//     console.log("Dance");
//     console.log("Dance");
//     console.log("Dance");
//     console.log("Dance");
//     console.log("Dance");
//     console.log("Dance");
//     console.log("Dance");
//     console.log("Dance");
// }

//dance(); // yah button hai yah tab hamne call kiya function ko tabhi dance print hua hai; 

//? isse ham chahe jitni bar dance print kara sakte hai bas hame dance ko utni hi bar call karna hoga 

//* but 10000 bar print karne ke liye 10000 bar dance ko call nahi karege iske liye ham loop ke andar dance ko call karege


//? Way of Create Function -> Function Decleartion


//* First Way Create a Function
// function first(){

// }

//* Second Way Create a Function -> isme variable ka name hi function ka name hai

// let fnc = function(){

// }


//? Arraow Function

let fnc = () => {
    console.log("Gaurav Upadhayay");
}

// fnc();
 

//* Parameter and Arguments

function print (v1) {
    console.log(`${v1} Nacch Raha hai`);
}

// print("Gaurav");
// print("saurav");

function add(v1,v2){
    console.log(v1+v2);
}

add(5,9);