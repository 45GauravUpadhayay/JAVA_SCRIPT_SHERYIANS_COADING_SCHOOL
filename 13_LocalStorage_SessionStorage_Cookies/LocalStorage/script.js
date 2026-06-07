//* LocalStorage -> hamre browser ke andar data store karna jo ki browser band karne par bhi deleate nahi hota hai

//? SeasionStorage -> data temporarily store karta hai matlab tab band data gayab

//* Cookies -> data store yah bhi store karta hai and yah browser ke cookies name ke property me store hota hai yah kam data and light data ke liye use hota hai

//* Kya Kya Padna hai

//? LocalStorage
//? Store kese karte hai -> setItem
//? data fetch kese karte hai -> getItem
//? remove kese karte hai -> removeItem
//? update kese karte hai

//* store karna padte hai

localStorage.setItem("name", "Gaurav Upadhayay");


//* Value kese nikalte hai

let val = localStorage.getItem("name")

//* value ko remove karna

localStorage.removeItem("name");

//* update karna

localStorage.setItem("name", "Upadhayay Ji")

//* setItem -> property hoti hai to overright kar deta hai and nahi hoti hai to bana deta hai

