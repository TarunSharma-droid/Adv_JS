
// The value of PI in javascript is hardcoded constant and its value cannot 
// be changed or overwrite in any case

console.log(Math.PI)

Math.PI = 5  // Trying to change the value of PI property of the Math object.

console.log(Math.PI) // the value has not change again.

// This is because PI ko alter karne ki permission JS nhi deti.

// getOwnPropertyDescriptor is the function which tells the detail of any property of Object.
const result = Object.getOwnPropertyDescriptor(Math ,"PI") // PI property of Math

console.log(result)

// value: 3.141592653589793
// writable: false,       => fixed cant be make true in any case
// enumerable: false,     => fixed cant be make true in any case
// configurable: false    => fixed cant be make true in any case

// Similarly we can also define such properties for our object whose value cannot be changed.