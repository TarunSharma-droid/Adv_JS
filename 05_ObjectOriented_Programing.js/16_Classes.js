
class User { // replacement of constructor function

    constructor(username,email,password){  // constructor is called as soon as the object is made using "new"

        this.name = username;
        this.mail = email;
        this.code = password;
    }

    // several other methods could also be their in the class without the keyword .
    encryptpassword (){

        return `srdgfgdsf${this.code}gdab`
    }
}

const U1 = new User("tarun" ,"tarun@mail.com",2343)

console.log(U1)
console.log(U1.name)
console.log(U1.mail)
console.log(U1.code)

console.log(U1.encryptpassword())

