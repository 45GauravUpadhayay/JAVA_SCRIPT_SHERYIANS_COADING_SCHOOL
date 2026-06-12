///* Callback Pattern and Callback hell

// function kuchderbadchaluga(val){
//     setTimeout(() => {
//         console.log(val)
//     }, Math.floor(Math.random()*10) * 1000);
// }
// kuchderbadchaluga(121);

// function kuchderbadchaluga(fnc){
//     setTimeout(fnc,Math.floor(Math.random()*10)*1000);
// };

// kuchderbadchaluga(() => {
//     console.log("hyeuejhj")
// })

//? ek function ko agar aap ek aur function bhej de rahe ho parameter me , to wo parameter waala function callback kahalata hai

// function profileLekeAao(username, cb) {
//     setTimeout(() => {
//         // console.log(`profile fetched of ${username}`);
//         cb({username});
//     }, 2000);
// }


// profileLekeAao("harsh", function(data){
//     console.log(data);
// })

//* this is called a callback hall

function profileLekeAao(username,cb){
    setTimeout(() => {
        console.log("fetching profile data ...")
        cb({_id:121212,username,age:26,email: "guehue@huehue.com"})
    }, 2000);
}

function saarePostLekarAoo(id,cb){
        console.log("fetching all postes ...")
    setTimeout(() => {
        cb({_id:id,posts: ["hey", "hello", "good Morning"]});
    }, 3000);
}

function savedPostNikalo(id,cb){
        console.log("fetching saved post ...")
    setTimeout(() => {
        cb({_id: id, saved: [1,2,2,5,5,58,88,5,5,58,,5,5,85,8,55]})
    }, 3000);
}

profileLekeAao("harsh", function(data){
    console.log(data);
    saarePostLekarAoo(data._id, function(posts){
        console.log(posts)
        savedPostNikalo(data._id, function(saved){
            console.log(saved)
        })
    })
})

