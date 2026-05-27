//? Create an Array with three fruits and print the second fruit

// let fruit = ["Apple", "Banana", "Mango"];
// console.log(fruit[1]);

//? Add Mango at the end of pineapple at the beginning of this array

// let fruit = ["Apple", "Banana"];
// fruit.push("Mango");
// fruit.unshift("Pineapple");
// console.log(fruit);

//? Replace Banana with the kewi in the array

// let fruit = ["Pineapple","Apple", "Banana", "Mango"];

// let kiwi = fruit[2] = "Kiwi";
// console.log(fruit);

//* Inseart "Red" and "Blue" at Index 1 in this array

// let colors = ["Green", "Yellow"];
// colors.splice(1,0, "Red","Blue");
// console.log(colors);

//* Extract only the middle 3 elements from this array

// let items = [1,2,3,4,5,6];
// let newarr = items.slice(1,4);
// console.log(newarr);

//* Sortb this Array alphabetically and then revesre it :

// let names = ["zara", "Arjun", "Mira", "Bhavya"];
// console.log(names.sort().reverse());

//* Use .Map to square each Number

// let arr = [1,2,3,4];
// let newarr = arr.map(function(val){
//     return val*val;
// });
// console.log(newarr);

//? Use .filter () to keep number greter than 10

// let arr = [5,12,8,20];
// let newarr = arr.filter((val) => {
//     return val>10;
// });
// console.log(newarr);

//* Use .reduse() to find the sum of this array

// let arr = [10,2,20,30,40];
// let newarr = arr.reduce((acc, val) => {
//     return acc+val;
// }, 0);

// console.log(newarr);

//* Use find() to get the first number less than 10

// let arr = [12,15,17,3,15,2];

// let newarr = arr.find((val) => {
//     return val<10;
// })
// console.log(newarr);

//* Use .some() to cheak if any student has scored below 35;

// let arr = [45,60,28,90];
// let ans = arr.some((val) => {
//     return val < 35;
// })

// console.log(ans);

//* use .every() to chek all numbers are even

// let arr = [2,4,6,8,10];

// let ans  = arr.every((val) => {
//     return val % 2 == 0;
// })

// console.log(ans);

//? Destructured this array to get first name and last name

// let fullName = ["Gaurav" , "Upadhayay"];

// let ans = [firstName,LastName] = fullName;
// console.log(LastName)

//* Merge two arrays using spread operators

// let a = [1,2];
// let b = [3,4];

// let c = [...a, ...b];
// console.log(c);

//* Add "India" to the start this array using spread

// let contries = ["USA", "UK"];

// console.log(contries = ["India" , ...contries]);

//? Clone this array properly no a any refrence

let arr = [1,2,3];

let arr2 = [...arr];
console.log(arr2);
console.log(arr);