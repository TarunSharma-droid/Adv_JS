
class User { // replacement of constructor function

    constructor(username,email,password){  // constructor is called as soon as the object is made using "new"

        this.name = username; // properties inside class constructor are delcared using "this".
        this.mail = email;
        this.code = password;
    }

    // several other methods could also be their in the class ( with or without the keyword function) .
    encryptpassword = function(){

        return `srdgfgdsf${this.code}gdab`
    }

    greet(){
        console.log(`Hello ${this.name}`)
    }
}

const U1 = new User("tarun" ,"tarun@mail.com",2343)

console.log(U1)
console.log(U1.name)
console.log(U1.mail)
console.log(U1.code)

console.log(U1.encryptpassword())
console.log(U1.greet())

