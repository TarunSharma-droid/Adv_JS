
const user={

    username : "Tarun",
    loginCount : 10 ,
    signedIn : true,
    message : function(){
        console.log("Vaild user")
    }
}

console.log(user.username)
console.log(user.message())

user.age = 23 // adding property to object.

console.log(user.age)