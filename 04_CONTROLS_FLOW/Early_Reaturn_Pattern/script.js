//* Early Return Pattern

function getVal(val){
    if(val >=80) return 'A';
    else if (val < 80 && val >=50) return 'B';
    else return 'C';
}

console.log(getVal(30));