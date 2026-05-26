//* Create a reusable discount calculator (HOF)


function discount(dis){
    return function(price){
        return price - price * (dis / 100);
    }
}

let disc = discount(50)

console.log(disc(200));


function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
console.log(counter() ());

// let c = counter();
// console.log(c());

//* Create a New Function to transform a new Value

function gaurav(val){
    return val*2;
}

console.log(gaurav(5));


(
    function(){
        const password = "secreate Password";
        console.log(password);
    }
)();

console.log(password); // password is not defind yah error aayega

   