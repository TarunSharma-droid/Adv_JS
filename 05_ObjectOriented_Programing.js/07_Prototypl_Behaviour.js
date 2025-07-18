// Java Script is by default have Prototyple behaviour.
// Means JS goes form layer to layer untill it found the null value for the prototype.

function Person(name){

    this.Full_name = name
}

console.log( Person.prototype) // => { }

//🔹Every normal function (not arrow function) has a special "hidden" property called .prototype (by default present for every fucntion),
//  which is just a normal empty object.  This property is only used when we create a new object using the function with "new" to set up inheritance.

//🔹This property is only used when we create a new object using the function with "new". It helps JavaScript to establish a connection
//  between the object created using "new" and the function that created it (i.e., the constructor function).

//💡 Since we know that .prototype property is an empty object so we can add something to it just by using dot notation.

Person.prototype.sayHello = function(){ // added a function sayHello

    console.log(`Hello ${this.Full_name}`) // this is used because => to tell the context (jis object ne bhi bulaya us ka Full_name).
}

console.log( Person.prototype) // => we get => { sayHello: [Function (anonymous)] } this shows sayHello is added to prototype property of Person.



// Now creating an object.

p1 = new Person("Tarun")

// JS creates a new object: { name: "Tarun" }
// Every object in JavaScript has a hidden property called __proto__  (it is object's prototype)
// JavaScript connects the new object's internal prototype (__proto__) to the function's .prototype so it can inherit properties or methods from it.

console.log(p1.__proto__ === Person.prototype) // true ==> connection establised (This means p1 inherits from Person.prototype)

p1.sayHello()
// Now p1.sayHello() is working , because p1 is object of constructor function "Person" and "Person" has the new property "sayHello"
// in its prototype. ( because JavaScript looks inside Person.prototype )
// This shows JavaScript goes inside layer to layer.