
const user={

    username : "Tarun",
    loginCount : 10 ,
    signedIn : true,
    message : function(){

 //   console.log(username) 
      console.log(this.username)
      console.log(this)
    }
}

console.log(user.message())


// console.log(username) =>  Gives an error because:

// Inside the function `message`, you're trying to access `username` without any prefix like `this.` or
// without declaring it as a local variable (variable declared inside the object).
// JavaScript first looks for a local variable named `username` declared within the function.
// If not found, it checks the outer/global scope (outside the object)
// Therefore, since `username` is not defined locally or globally, it results in a ReferenceError.

// So we have to use "this" keyword to access the username ( which is a property not a variable delcared inside or outside)
// inside the object.

// "this" keyword tells us about the current context.
// it means ki ==> kis chiz ki baat ho rhi hai
// ab upar wale object mai "this" ko use kiya hai matlb "user" object ki baat ho rhi hai........
// we can check it by printing the "this" => gives complete object.