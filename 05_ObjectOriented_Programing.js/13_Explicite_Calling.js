// When we define properties of the fucntions :=>

function SetUserName (getname){

    this.name_ofuser = getname
}

function createUser (username , email , password){
       
    SetUserName.call(this, username); // Explicite calling
    this.mail_ofUser = email
    this.password_ofUser = password

}


const u1 = new createUser("Tarun" ,"tarunshama@gmail.com" , 2002)

console.log(u1)

/*
When we normally call new SetUserName(...), then "this" inside SetUserName points to a 
new object created by it(SetUserName).

But here, we don’t want to create a separate object of SetUserName — we want SetUserName
to set properties on the object being created by createUser.

So instead of letting SetUserName create its own 'this", we pass the "this" from createUser
into SetUserName using .call(this, ...).

That way, both constructors work on the same object, and all properties stay together.  */







