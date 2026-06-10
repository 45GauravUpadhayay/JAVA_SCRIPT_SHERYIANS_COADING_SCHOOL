function createToaster(config) {
    return function(nortification){
        let div = document.createElement("div");
        div.className = `inline-block${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black" } px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX === "right" ? "right-10" : "left-10"} ${config.positionY === "top" ? "top-10" : "bottom-10"}`;

        div.textContent = nortification;
        document.querySelector(".parent").appendChild(div);

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        },config.duration * 1000)
    }
}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "light",
    duration: 3,
});

toaster("Download Done");
setTimeout(() => {
    toaster("Gaurav accepted your request")
},2000);