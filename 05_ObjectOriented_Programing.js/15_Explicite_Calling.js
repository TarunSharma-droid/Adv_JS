// When we define properties of the fucntions :=>

function SetUserName (getname){

    this.name_ofuser = getname
}

function createUser (username , email , password){
        
    this.mail_ofUser = email
    this.password_ofUser = password

}


const u1 = new createUser("Tarun" ,"tarunshama@gmail.com" , 2002)

console.log(u1)

/* 
Object.setPrototypeOf(createUser, SetUserName)

=> This only sets the prototype of the function object `createUser` to `SetUserName`, 
   meaning `createUser` can access the static properties and methods of `SetUserName`.

=> It does NOT transfer or inherit instance properties (i.e., those defined using `this.property = ...` inside constructors).

=> Therefore, using Object.setPrototypeOf() between constructor functions is generally not useful 
   when the goal is to share or inherit instance behavior.

=> To transfer or inherit instance properties, must use explicit calling 

*/





