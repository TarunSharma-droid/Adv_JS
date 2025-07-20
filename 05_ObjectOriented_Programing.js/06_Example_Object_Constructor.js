
function User(name , age , married){
 
    this.Full_name = name;
    this.current_age = age;
    this.marrige_status = married ;

    this.greeting = function(){
        console.log(`Welcome ${this.Full_name}`)
    }

}

u1 = new User("Tarun", 22, false)
u2 = new User("Kamal", 31, false)
u3 = new User("Lalit", 58, true)

console.log(u3)
console.log(u3.greeting) // => we get [Function (anonymous)] because we are jusat printing the value of the property greeting and not executing the material of function.
console.log(u3.greeting()) // will give Welcome Lalit


console.log( u1 instanceof User) // return boolean value true which means kya sach mai u1 ek object hai User function ka.