// +++++++++++++++++++ Manually Prototype setting for functions (objects) ++++++++++++++++++++++

function SetUserName (getname){

    this.name_ofuser = getname
}

SetUserName.age = 34        // static property of SetUserName
SetUserName.city = "jaipur" // static property of SetUserName

function createUser (username , email , password){
       
    this.mail_ofUser = email
    this.password_ofUser = password

}

Object.setPrototypeOf(createUser, SetUserName) 
// Does not work properly here as they are not simple objects
// it only copies the static property of SetuserName to createUser and not the instance properties 
// Instance Properties could only activate when object is created by the new keyword.

const u1 = new createUser("Tarun" ,"tarunshama@gmail.com" , 2002)

console.log(u1)

console.log(createUser.age) // static property is transfered


/* 
Object.setPrototypeOf(createUser, SetUserName)

=> This only sets the prototype of the function object `createUser` to `SetUserName`, 
   meaning `createUser` can access the static properties and methods of `SetUserName`.

=> It does NOT transfer or inherit instance properties (i.e., those defined using `this.property = ...` inside constructors).

=> Therefore, using Object.setPrototypeOf() between constructor functions is generally not useful 
   when the goal is to share or inherit instance behavior.

=> To transfer or inherit instance properties to object and one creates using new, must use explicit calling 

*/