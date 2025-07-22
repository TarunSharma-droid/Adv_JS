
// We can also define properties for our object whose value cannot be changed.

const User = {

    name : 'Tarun',
    age : 23,
    married : false

}

const result = Object.getOwnPropertyDescriptor(User, "name"); // name property of User object
console.log(result)

// {
//   value: 'Tarun',
//   writable: true,      => writable ( can change value of it)
//   enumerable: true,    => enumerable ( will be considered in loop iteration)
//   configurable: true   => configurable ( tells can delete this property and can change the status of writable and enumurable)
// }

Object.defineProperty(User,"name" ,{ // changing the permission of the property name

    writable: false,     // ab value change nhi ho skti property ki  
    enumerable: false,   // ab agar loop lagega to name property consider nhi hogi.
    configurable: true   // true matlb aage bhi changes allowed hain
})

const result2 = Object.getOwnPropertyDescriptor(User, "name");
console.log(result2)

// Now trying to change the permission of the property "name" of object user.

User.name = "Rohan"

console.log(User.name) // will get Tarun only.

// Now trying to apply loop on the object .. and checking weather the loop is considering or not.

for ( let [key, value] of Object.entries(User)){

    console.log(`${key} : ${value}`) 
}
// we will get only  =>   age : 23
//                        married : false


// To make the change in the permissions of all the properties then in that case we can use :
// Object.getOwnPropertiesDescriptor