
function A(name){
    this.name = "tarun"
}

A.status = "Role" // static property of A

function B(){
    this.age = 23
}

Object.setPrototypeOf(B , A)  

console.log(B.status) // succesfully transfers the static property of  A to B
console.log(B.name)  // does not work because this.name is the instance property of A which could only activate when
                     // object is created by the new keyword of A.

// Object.setPrototypeOf() does NOT transfer instance properties 

// so explicite return is needed for the instance property transfer.

