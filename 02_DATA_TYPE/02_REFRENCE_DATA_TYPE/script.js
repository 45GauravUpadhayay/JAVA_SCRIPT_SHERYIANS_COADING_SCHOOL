//* REFRENCE DATA TYPE -> inko copy karne par aapko real copy nahi milegi but aapko refrence milega parent ka

//* array, object, function

//? [] -> this is a array
//? {} -> this is a object
//? () -> this is a function

let a = [1,2,3]
let b = a;

b.pop();
console.log(b);// refrence mila hai a ka isliye idhar se value hategi
console.log(a); // but idhar se bhi value hategi