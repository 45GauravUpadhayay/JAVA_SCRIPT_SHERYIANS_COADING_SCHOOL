//? Loops in JAVA SCRIPT

//* Repeate karne ko Loops Kahte hai

//? for while do-while forin forof foreach

//* for -> kaha se jana hai -> kaha tak jana hai -> kaise jana hai;

//* 1 - 50


//? while -> kaha se jana hai -> kab rukna hai -> kaise jana hai 

// 1 - jab tak jao tab tak me hello bol du

//* pahle condition bata do ki kab tak loop chalana hai

//? for loop syntax

// for(start; end; change){

// }


//* print 1 - 100 number

for(let i = 0; i<=100; i++){
    console.log(i);
}

//* print 1 - 32 number

let i = 1;

while(i<32){
    console.log(i);
    i++;
}

//? do - while

let j = 1;
do{
console.log(j);
j++;
}
while(j<20);

//* use for braek statement

for (let i = 1; i<35; i++){
    if (i === 32) {
        break;
    }
    console.log(i);
}

//* use of continue statement

for (let i = 1; i<35; i++){
    if (i === 32){
        console.log("This is a 32 Number");
        continue;
    }
    console.log(i);
}

