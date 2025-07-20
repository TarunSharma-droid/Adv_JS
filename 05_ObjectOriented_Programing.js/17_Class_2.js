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
//

// Admin.greet()
// User.greet()   ==> not valid syntax because Class is not a keyword in JS. so have to use the name of class we want to target.


User.prototype.greet = function(){

  return `Welcome User`
}

Admin.prototype.greet = function(){

  return `Welcome Admin`
}

console.log(U1.greet())
console.log(A1.greet())
