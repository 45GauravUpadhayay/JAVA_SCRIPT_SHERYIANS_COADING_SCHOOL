//* PUSH Method -> arr me koi value jodna

// let arr = [1,2,3,4,5];
// arr.push(6);
// console.log(arr)

//* POP Method -> array se last value hatana

// let arr = [1,2,3,4,5];
// arr.pop();
// console.log(arr);

//* SHIFT Method -> array ki first value hatana

// let arr = [1,2,3,4,5];
// arr.shift();
// console.log(arr);

//* UNDHIFT Method -> Array ki suruvat me koi value add karna

// let arr = [1,2,3,4,5];
// arr.unshift(0);
// console.log(arr);

//* SPLICE Method -> array me kaha se kitni value hatani hai (2,1) second index se 1 value hata do

// let arr = [1,2,3,4,5];
// arr.splice(2,2);
// console.log(arr);

//* SLICE Method -> isse main array me koi change nahi aata hai isse hame ek new array ki copy milti hai jisme hamne jo hataya hai vah aata hai orginal array same hota hai (0,3) 0 index se 3 se 1 kam tak value ko hatana hai

// let arr = [1,2,3,4,5];
// let newarr = arr.slice(0,3);
// console.log(newarr);
// console.log(arr);

//* REVERSE Method -> Yah array ko reverse kar deta hai

// let arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr);

//* SORT Method ->  array ko sort kar accesnding order ho ya dissending order ho, Assending Order -> matlab sort function expact karta hai a - b assending order Disanding Order -> b-a

// let arr = [10,2,33,40,-1];
// let sr = arr.sort(function (a,b){
//     return a-b;
// });
// console.log(arr);

// let arr = [10,2,33,40,-1];
// let sr = arr.sort(function (a,b){
//     return b-a;
// });
// console.log(arr);

//* for Each -> Yah array ki har ek vakue ke p-ass jata hai and ek funnction ke andar value us value ke sath aap jo cho vah kar sakte ho

// let arr = [1,2,3,4,5];
// arr.forEach(function(val){
//     console.log(val * 5);
// })
// console.log(arr);

//* MAP Method -> map bas tab use karna hai jab hame naya array banana hai pichle array ke data ke basics par map dikhte hi sath me apne man me ek blank array bana liya karo 

// let arr = [1,2,3,4,5];
// let newarr = arr.map(function(val){
//     return 12;
// })
// console.log(newarr); // array me 12 aa jayega jitni main array me element hai
// console.log(arr); // tah array same rahega

// kuch return nahi karoge to return ya fir array me undefind aayega

//* FILTER Method -> filter me bhi ham kuch return karte hai but isme hum true and false return karte hai isme bhi new array banta hai

// let arr = [1,2,3,4,5];
// let newarr = arr.filter(function(val){
//     if (val > 1) return val;
// });
// console.log(newarr);
// console.log(arr);

//* REDUCE Method -> ek bade array ko reduce kar dena ek singal value me isme ha,m jo bhi return karte hai vah pahle accumilator me jata hai

// let arr = [1,2,3,4,5];
// let ans = arr.reduce(function(accumilator,val){
//     return accumilator+val;
// },0);
// console.log(ans); // 15 jo ki arr ka sum hai
// console.log(arr);

//* FIND Method -> aapke array me se jo bhi pahla esa banda milega jo ki array me se uski condition ko match karega use pahle return karega pahle first vale ko hi return karega

// let arr = [
//     { id: 1, key: 1},
//     { id: 2, key: 2},
//     { id: 3, key: 1}
// ];

// let val = arr.find(function(val){
//     return val.key === 1;
// })

// console.log(val);

//* SOME Method -> yah true ya false me answer deta hai agar koi hai to true and koi nahi hai to false

// let arr = [10,20,30,4,50,60,70,80,90];
// let any = arr.some(function(val){
//     return val > 70;
// })

// console.log(any);

//* EVERY Method -> yah cheak karke batata hai ki sare bande condition ko pass kar rahe hai ya nahi kar rahe hai

// let arr = [10,20,30,40];
// let ans = arr.every(function(val){
//     return val > 20;
// })
// console.log(ans);

//* Destrucharting  Array -> Array se value ko bahar nikalna but bar bar ya arr[0] and many more

// let arr = [1,2,3,4,5,6,7];
// let [a,b, ,c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);

//? isme 3 isliye nahi aaya kyoki uski jagah khali hai

//* SPREAD OPERATORS -> ... Yah hai spread operator new array ki copy ya fir kahe to ex. let arr2 = [...arr]; matlab arr ki value lo aur arr2 me bhikerdo

// let arr = [1,2,4,58,8,9,74,2,5,685,258,1,2,5,5,9,6,26];

// let arr2 = [...arr];
// console.log(arr2);
// arr2.pop();
// console.log(arr2);
