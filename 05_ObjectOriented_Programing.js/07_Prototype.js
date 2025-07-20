// Javascript objects/functions have the special property called Prototype which is itself a object.
// This prototype is either null or have many other functions in it.

// The objects created by any constructor function will have access to all the properties and methods
// present inside the prototype of that constructor.


// {NOTE} ==> Since we know that prototype property is an object so we can manually add some functionalities to it
// just by using dot notation.

function User(name,age){ // constructor function

    this.Full_name = name,
    this.current_age = age
}

User.prototype.sayHello = function(){ // added a property sayHello to the prototype of constructor fucntion User.

    console.log(`Hello ${this.Full_name}`) 
}

console.log( User.prototype) // checking that sayHello is loaded in prototype or not

// now every object created by the constructor fucntion "User" will have the access to the "sayHello"

const user1 = new User ("Tarun",22)

user1.sayHello()

// since sayHello is not present in the front in the constructor function. so JS goes inside the prototype to find it.
// This shows that JS have prototyple behavior means goes inside and inside utill find something.