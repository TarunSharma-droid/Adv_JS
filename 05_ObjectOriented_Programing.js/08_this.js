// In JavaScript, "this" is like saying: ==> “I’m talking about the current object I’m working with.”

function createUser(){ // constructor function
    this.user_name = name
    this.user_mail = email
    this.user_DOY = year
}

// When you create an object using new
let u1 = new createUser("Tarun", "tarun@gmail.com", 2002);



// JavaScript does something behind the scenes like this:

// STEP 1 =>   let u1 = {};                                                  // Creates empty object
// STEP 2 =>   u1.__proto__ = createUser.prototype;                          // Connects the object to constructor function

// STEP 3 =>   createUser.call(u1, "Tarun", "tarun@gmail.com", 2002);     

// createUser, treat u1 as the object working on!
// So, inside createUser(), the word "this" refers to that new object: u1 ( so this.user_name means u1.user_name)


function Person(name) {
    this.name = name;
}

let p1 = new Person("Tarun");   // here this refers to p1 (so this.name means p1.name)
let p2 = new Person("Yash");    // here this refers to p2 (so this.name means p2.name)

