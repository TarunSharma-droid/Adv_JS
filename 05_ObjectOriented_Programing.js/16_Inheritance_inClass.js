
class User {

    constructor(get_name){
        this.name_ofTeacher = get_name
    }

    logMe(){
        console.log(`Username is ${this.name_ofTeacher}`)
    }
}

class Teacher extends User {  // inheritance is stablished in Teacher class form User class to get username

    constructor(username ,email, password){
      
        super(username) // super takes the username and goes to User class and set this username 
                        // to this.name_ofTeacher and make it available in this Teacher class

        this.mail_ofTeacher = email;
        this.password_ofTeacher = password;
    }

    addCourse (){
        console.log(`${this.name_ofTeacher} is a good teacher`)
    }
}

const T1 = new Teacher("Tarun","tarun@.com",1234)

console.log(T1)
T1.addCourse()
T1.logMe()

const U1 = new User("Rajat Sir")
U1.logMe()

console.log(T1 instanceof Teacher) // instance of meaning is object of
console.log(T1 instanceof User)

// console.log( Teacher instanceof User) => false because 

// Teacher is not an object created from User. 
// Only objects created with new User(...) or new Teacher(...) are instance of classes.
