//* Write a BMI Calculator

function bmi(weight,height){
    return (weight / (height*height));
}

console.log(bmi(66,1.8).toFixed(2));