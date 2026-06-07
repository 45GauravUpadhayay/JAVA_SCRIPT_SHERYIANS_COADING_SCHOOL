setTimeout(() => {
    document.querySelector(".banner").style.display = "none";
},3000)

setTimeout(() => {
    let banner2 = document.createElement("div");

    banner2.className = "banner2"; ;

    banner2.innerHTML = "<h1>Hello Everyone banner2 !!!</h1>"
    document.body.appendChild(banner2);
}, 7000);