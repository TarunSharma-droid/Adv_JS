
// static is used when we does not want any object to use any property of class

class User {

    constructor(get_name){

        this.name = get_name
    }

    logMe(){
        console.log(`Username is${this.name}`)
    }

     static weekend(){
        console.log("18 holidays")
    }
}

class Teacher extends User { 

    constructor(username ,email, password){
      
        super(username) 
        this.mail_ofTeacher = email;
        this.password_ofTeacher = password;
    }

    addCourse (){
        console.log(`${this.name} is a good teacher`)
    }
}

const user1 = new User ("Tarun")

user1.weekend()  // gives error

const t1 = new Teacher ("Rahul",",mail.com",1234)

t1.weekend() // gives error