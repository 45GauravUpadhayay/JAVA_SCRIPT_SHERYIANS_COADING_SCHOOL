//* Default , Rest and Spered Parameter

//* default

// function add(v1 = 0 ,v2 = 0) {
//     // console.log(v1,v2); // Undefind Undifind
//     console.log(v1+v2) // NaN -> isliye default value deyte hai -> v1 = 0; v2 = 0
// }

// add()

//? Rest and Spered Parameter

// Rest Operator -> ...hota hai 

//? Jab Argument kaiy sare ho to hame utne hi parameter banane padege to usse bachne ke liye , ham rest ka use karte hai ... agar ... function ke parameter space me lage to wo rest operators hai agar vo array and object me lage to vah Spred Operartos hai

// function abcd(...val){
//     console.log(val);
// }

// abcd(1,5,8,6,23,65,9,5,69,8,5,69,8,5,6,58,45,8);

//* Return values and early return values

// function abc(){
//     return 22;
// }

// let val = abc();
// console.log(val);

//? First Class Function -> Function ko Value ki tarah treate karana

//* Jaha Jaha value bhej sakte hai vaha vaha ham function bhej sakte hai

// function gaurav(val) {
//     val();
// }

// gaurav(function(){
//     console.log("GAURAV#u")
// })

//? Higher Order Function -> vo function jo ki return kare ek function ya fir ecxcapt kare ek function apne parameter me

// function hof(){
//     return function(){
//         console.log("GAURAV#u")
//     }
// }

// hof() ();

//* Pure vs Impure Function

//? Pure Function -> Esa Function jo bahar ki value ko na badle

// let a = 12;

// function lala(){
//     console.log("hehehe");
// }

//? Impure Function -> aisa Fnc jisse ya fir jo bahar ki value ko badal de use Impure Function Kahte hai

// function hui(){
//     a++;
// }

//* Closures -> Ek Function jo return karega ek aur function return hone bala function hames use karega parent function ka koi variable

// function gaurav(){
//     let a = 12;
//     return function(){
//         console.log(a);
//     }
// }

// gaurav() ();

//* Lexical Scoping

function abcd(){
    let a = 1; // ise pure function me use kar sakte hai
    console.log(a);
    function efg(){
        let b = 2; // ise gfg ke pure function me use kar sakte hai
        console.log(b);
        function hij(){
            let c = 3; // ise only hij ke function me use kar sakte hai
            console.log(c);
        }
        hij();
    }
    efg();
}

abcd();


//? IIFE ( Immedetily Invoked Function Expression )

//*  Function ko turant hi call karna hi IIFE Kahlata hai

// (function(){
//     console.log("Heyeyeyeyey")
// }) ();

//? Hoisting Difference Betwwen Decleration and Expression

//* Function Expression me ham Hoisting nahi kar pate hai isliye usme error aata hai

//* Function Statements me Hoisting Work karti hai 

// saurav();

//? isme error aayega 
// let saurav = function(){
//     console.log("Saurav Upadhayay");
// }

//? yah chal jayega

// function saurav(){
//     console.log("Saurav Upadhayay");
// }

