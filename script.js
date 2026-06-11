let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
    users: [],
    init: function (e) {
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function(e){
        e.preventDefault();
        this.addUser();
    },
    addUser: function(){
        this.users.push({
            userName: userName.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });
        form.reset();
        this.renderUi();
    },
    renderUi: function(){
        document.querySelector(".cards").innerHTML = "";
        this.users.forEach((user, index) => {
            const card = document.createElement("div");
            card.className = "card";

            // images

            const img = document.createElement("img");
            img.src = user.photo;

            // name

            const h3 = document.createElement("h3");
            h3.textContent = user.userName;

            // role

            const h4 = document.createElement("h4");
            h4.textContent = user.role;

            // bio

            const p = document.createElement("p");
            p.textContent = user.bio;

            // delete btn

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";

            ///* add event 

            deleteBtn.addEventListener("click", () => {
                this.removeUser(index);
            });

            //* Append Children

            card.appendChild(img);
            card.appendChild(h3);
            card.appendChild(h4);
            card.appendChild(p);
            card.appendChild(deleteBtn);

            //* Add Card Container

            document.querySelector(".cards").appendChild(card);
        })
    },
    removeUser: function(index){
        this.users.splice(index,1);
        this.renderUi();
    },
}

userManager.init();