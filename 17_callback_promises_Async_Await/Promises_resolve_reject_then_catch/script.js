//* Promises : resolve,reject,then,catch

//? Promises ham ek promis banate hai jo ki do state me se ek state me ja sakta hai and wo ya to resolve hoga ya to reject hoga ab vah kya hoga yah to waqt bateyaga par hame dono ke liye code likhna padta hai


let pr = new Promise(function (res,rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if(rn>5){
            res("resolve with " + rn);
        }
        else{
            rej("reject with " + rn);
        }
    }, 3000);
})


pr.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val)
})