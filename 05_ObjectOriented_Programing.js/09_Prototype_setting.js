// ++++++++++++++++++++++++++++++ Prototype setting +++++++++++++++++++++++++++++++++

// Prototype setting is the act of linking one object (child)to another object (parent) 
// so that the child can inherit properties and methods from the parent. (JS do it behind the scene)

function Person(name){ // constructor function (parent)

    this.Full_name = name
}


p1 = new Person("Tarun") // object (child)



// STEP 1 => JS creates a new object : let p1 = {}

// STEP 2 => Every object in JavaScript has a hidden property called __proto__  
//           It points to another object/constructor fucntion — the one it will inherits properties and methods from.

//           JavaScript sets the internal __proto__ of p1 to point to Person.prototype:
//           p1.__proto__ = Person.prototype

console.log(p1.__proto__ === Person.prototype) // true ==> connection establised (This means p1 inherits from Person.prototype)

// STEP 3 => JavaScript runs the function Person("Tarun") with this pointing to p1: that means

//           Person.call(p1, "Tarun");     
//           Person, treat p1 as the object working on!
//           So, inside Person(), the word "this" refers to that new object: p1 ( so this.Full_name means p1.Full_name)
           

// We can also set the prototype manually to inherit properties from one object to another.

