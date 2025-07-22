
class User{

    constructor(username , user_password){

        this.name = username;
        this.password = user_password;
    }


}

const user1 = new User("Tarun" , 123)
console.log(user1.password)

// Now if we dont want to access the password as  user1.password 
// So we can do two thing.

class Admin{

    constructor(username , user_password , user_id){

        this.name = username;
        this.password = user_password;
        this.id = user_id;
    }

// Method 1 =>
    givePassword(){
        return `Your pass word is ${this.password}`
    }
    

// Method 2 => defining in get => when we call this function we dont need to apply ()
    get giveUserId(){
            return `Your id is ${this.id}`
        }
    }

const a1 = new Admin("Lokesh" , 321 , "ab506")

console.log(a1.givePassword()) 

console.log(a1.giveUserId)    

//  It is just like we are accessing the property of an object and not calling an function.
//  Behind the scenes, it's still a function, but it behaves like a property. 