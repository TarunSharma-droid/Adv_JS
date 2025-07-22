// In JavaScript, "this" is only set when the function is actually called and with object name.
// Function ke call hone pr he this mai value aati hai.

const user = {
  name: "Tarun",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};


console.log(user.greet()) // as the script run function is called and this refers to user.

// Suppose you have do this =>

const myFucntion = user.greet 
// Here we are just passing the defination of the function(greet) to myFunction not calling it.
// As we are not calling the funtion so "this" inside is not set (not refering to anything).

                              
console.log(myFucntion())
// Now we are calling the new function without any object name, so
// "this" inside the function defination has no object to refer to. ( this is lost )
//  So, this is undefined. So this.name is also undefined.

// bind() solve this problem

const newFunction = user.greet.bind(user) 
//  bind permanently set "this" to provided object. // it means we are explicitally setting "this"

console.log(newFunction())