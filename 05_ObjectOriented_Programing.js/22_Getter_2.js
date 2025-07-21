
// 1 }

class Person {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = `${this.firstName} ${this.lastName}`;  
  }
}

const p = new Person("Tarun", "Sharma");
console.log(p.fullName); 

p.firstName = "Rohit";
console.log(p.fullName);

// Now when you do =>   p.firstName = "Rohit"

// firstName is updated 
// But fullName is not updated  — because it was set only once when the object is create and it 
// have the initial values of firstname and lastname and later we are just changing the value of
// firstname which will not affect the values of full name.



// 2 } To get changed fullname ( make it dynamic ) => use funtion which is set everytime it is called

class Admin {
  constructor(first, last) {

        this.firstName = first;
        this.lastName = last;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const a = new Admin("Tarun", "Sharma");

console.log(a.fullName()); // Tarun Sharma

a.firstName = "Rohit";
console.log(a.fullName()); //  Rohit Sharma

// Now when you do =>   p.firstName = "Rohit"

// firstName is updated 
// And also fullName is updated here — because fullName() returns the current values of 
// this.firstName and this.lastName each time it’s called.

// So every time you call a.fullName(), 
// JavaScript does => 
// “What’s a.firstName right now? What’s a.lastName right now? Let me return them joined.”



// 3 } To get changed fullname ( make it dynamic ) => use "get" with the method 1 only

class Manager {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  // Getter for fullName — auto-updates whenever first/last name changes
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const m = new Manager("Tarun", "Sharma");
console.log(m.fullName); 

m.firstName = "Rohit";
console.log(m.fullName); // also we need not to use ()
