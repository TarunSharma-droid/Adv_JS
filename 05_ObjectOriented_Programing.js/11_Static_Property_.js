
// A static property or method is something that belongs to 
// the constructor function only , not to the instances created from it.

function User(name) {
    this.name = name;
}

// Static property
User.role = "Admin";

const user1 = new User("Tarun");

console.log(User.role);    //  "Admin"
console.log(user1.role);   //  undefined