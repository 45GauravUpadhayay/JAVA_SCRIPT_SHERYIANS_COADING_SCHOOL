//* class hamne bana rakhi and hamne fir se new class banayi hai jo pichli class ki sari value ko hold karke rakhti hai 


class User{
    constructor(name,address,userName,email){
        this.name = name;
        this.address = address;
        this.userName = userName;
        this.email = email;
        this.role = "user";
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
    CheakRole(){
        return `Yor are a ${this.role}`
    }
}
class Admin extends User {
    constructor(name,address,userName,email){
        super(name,address,userName,email);
        this.role = "Admin";
    }

    remove(){
        document.querySelectorAll("h1").forEach(function(ele){
            ele.remove();
        })
    }
}
let u1 = new User("Gaurav Upadhayay", "Agra", "gaurav45", "45upadhayay@gmail.com");

let u2 = new User("Harsh", "Bhopal", "async123","aq@a.com");

let a1 = new Admin("admin1", "India", "Admin45", "Admin@admin.com");