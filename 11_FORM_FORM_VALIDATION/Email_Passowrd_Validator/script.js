let email = document.getElementById("email");

let password = document.getElementById("password");

let emailError = document.getElementById("emailError");

let passwordError = document.getElementById("passwordError");

let form = document.querySelector("form");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let emailValidate = emailRegex.test(email.value);

    let passwordValidate = passwordRegex.test(password.value);

    if (email.value === "") {
    emailError.textContent = "Email cannot be empty";
    email.style.border = "1.5px solid red";
}
else if (!emailValidate) {
    emailError.textContent = "Email is Invalid";
    email.style.border = "1.5px solid red";
}
else {
    emailError.textContent = "";
    email.style.border = "1.5px solid green";
}


if (password.value === "") {
    passwordError.textContent = "Password cannot be empty";
    password.style.border = "1.5px solid red";
}
else if (!passwordValidate) {
    passwordError.textContent = "Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char";
    password.style.border = "1.5px solid red";
}
else {
    passwordError.textContent = "";
    password.style.border = "1.5px solid green";
}

if(emailValidate && passwordValidate){
    alert("Form submitted successfully ✅");

    // document.getElementById("message").textContent = "Everything is Correct";
}
})