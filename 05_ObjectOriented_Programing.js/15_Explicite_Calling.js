// When we define properties of the fucntions :=>

function SetUserName (getname){

    this.name_ofuser = getname
}

function createUser (username , email , password){
       
    SetUserName.call(this, username); 
    this.mail_ofUser = email
    this.password_ofUser = password

}


const u1 = new createUser("Tarun" ,"tarunshama@gmail.com" , 2002)

console.log(u1)

/*
When we normally call new SetUserName(...), the this inside SetUserName points to a 
new object created by it.

But here, we don’t want to create a separate object — we want SetUserName to set properties
on the object being created by createUser.

So instead of letting SetUserName create its own this, we pass the this from createUser
into SetUserName using .call(this, ...).

That way, both constructors work on the same object, and all properties stay together.  */

/* 
Object.setPrototypeOf(createUser, SetUserName)

=> This only sets the prototype of the function object `createUser` to `SetUserName`, 
   meaning `createUser` can access the static properties and methods of `SetUserName`.

=> It does NOT transfer or inherit instance properties (i.e., those defined using `this.property = ...` inside constructors).

=> Therefore, using Object.setPrototypeOf() between constructor functions is generally not useful 
   when the goal is to share or inherit instance behavior.

=> To transfer or inherit instance properties, must use explicit calling 

*/





