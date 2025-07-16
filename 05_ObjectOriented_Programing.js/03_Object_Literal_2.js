
const user={

    username : "Tarun",
    loginCount : 10 ,
    signedIn : true,
    message : function(){

 //   console.log(username)  ==> no valid sytax because username is created outside the function.
      console.log(this.username)
      console.log(this)
    }
}

console.log(user.message())

// "this" keyword tells us about the current context.
// it means ki ==> kis chiz ki baat ho rhi hai
// ab upar wale object mai this ko use kiya hai matlb "user" 
// object ki baat ho rhi hai........
// we can check it by printing the "this" => gives complete object.