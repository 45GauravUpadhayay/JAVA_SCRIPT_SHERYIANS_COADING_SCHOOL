//* use case -> private counter, encapsulation

//? Private Counter

// function CountForMe () {
//     let a = 0;
//     return function () {
//         a++;
//         console.log(a);
//     };
// };

// let fnc = CountForMe();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();

// let fnc2 = CountForMe();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();


//* encapsulation

function clickLimiter  () {
    let click = 0;
    return function () {
        if(click < 5){
            click++;
            console.log(`Clicked ${click} Times`);
        } 
        else{
            console.error("LIMIT EXEDEDED, TRY AFTER SOME TIME");
        };
    };
};

let fnc = clickLimiter();
fnc();
fnc();
fnc();
fnc();
fnc();
//* abb error aayega because 6 bar chal raha hai
fnc();
let fnc2 = clickLimiter();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();
