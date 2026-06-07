let count = 0;
let progress = document.querySelector(".progress_bar")
let percentText = document.querySelector(".percent");

let intv = setInterval(() => {
    if(count <= 99){
        count++;
        progress.style.width = `${count}%`;
       percentText.textContent = `${count}%`;
    }
    else{
        document.querySelector("h2").textContent = "Download Complete"
        clearInterval(intv);
    }

},30)
