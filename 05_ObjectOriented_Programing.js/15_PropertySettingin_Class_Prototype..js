class Admin{

    constructor(username,area){  // constructor is called as soon as the object is made using "new"

        this.name = username;
        this.location = area;
        
    }
}

class User {
     constructor(username,email,password){  // constructor is called as soon as the object is made using "new"

        this.name = username;
        this.mail = email;
        this.code = password;
    }
}

const U1 = new User("tarun" ,"tarun@mail.com",2343)
const A1 = new Admin("Rajat" , "NewZeland")

// Class.prototype.greet = function(){

//     console.log("valid Class")
// }                                      
//                                                this syntax not work here because Class keyword not exists is JS.
//                                                so we cannot declare a property in prototype of all classes defined 
// Admin.greet()                                  and will going to be defined.
// User.greet()   


User.prototype.greet1 = function(){               // have to decalare one by one

  return `Welcome User`
}

Admin.prototype.greet2 = function(){

  return `Welcome Admin`
}

console.log(U1.greet1())
console.log(A1.greet2())

// console.log(U1.greet2())  gives error
// console.log(A1.greet1())  gives error
