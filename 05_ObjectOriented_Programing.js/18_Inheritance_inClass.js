
class User {

    constructor(get_name){

        this.username = get_name
    }

    logMe(){

        console.log(`Username is${this.username}`)
    }
}

class Teacher extends User {  // inheritance is stablished in class form User class. to get username

    constructor(username ,email, password){
      
        super(username) // super takes the username and goes to User class and set this username 
                        // to this.username and make it available in this class
        this.mail_ofTeacher = email;
        this.password_ofTeacher = password;
    }

    addCourse (){
        console.log(`${this.username} is a good teacher`)
    }
}

const T1 = new Teacher("Tarun","tarun@.com",1234)

console.log(T1)
T1.addCourse()
T1.logMe()

const U1 = new User("Rajat Sir")
U1.logMe()

console.log(T1 instanceof Teacher)
console.log(T1 instanceof User)

// console.log( Teacher instanceof User) => false because 

// Teacher is not an object created from User. It's a constructor function (actually a class).
// Only objects created with new User(...) or new Teacher(...) are instanceof those classes.
