
// 1}
const arr = [ 12 ,343, 4]

console.log(typeof arr )
console.log(arr.length)

// array has the object nature in JS


// 2} 
const str = "Tarun"

console.log(typeof str)
console.log(str.length)

// The string is considered as the string in JS
// But we are able to apply the dot notation to it so it also considered as object in JS.


// 3}
function multiplyBy5(num){
    return num*5
}

console.log(typeof multiplyBy5)
multiplyBy5.power = 2           // it is just like we are adding the property to an object.
console.log(multiplyBy5.power) // give valid result it means property has successfuly added to the function

// In JavaScript, functions are also objects, so you can assign custom properties to them just like objects.

