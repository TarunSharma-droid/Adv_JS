// Normally in JavaScript:
// When a function finishes executing, its local variables are destroyed —
// because they were only meant to be used inside that function.

function makeFunc() {

    const name = "Mozilla";  //  Local variable inside makeFunc

    function displayName() { //closure
        console.log(name);   //  Uses name from parent function 
    }

    return displayName;  //  Returning the function definition itself, NOT calling it
}

const Func = makeFunc();  
// As this line executes:
// - name = "Mozilla" is created
// - displayName() is defined (and remembers "name" from its surrounding scope)
// - displayName is returned and stored in Func

// At this point, makeFunc() has finished running (execution is done) => (so "name" destroy ho jana chiye tha but ).
// BUT — because displayName is still using "name", JavaScript keeps "name" alive inside a closure
// So "name" is NOT destroyed yet!

Func(); 
// You're now calling the function that was returned (displayName)
// Even though makeFunc() is over, displayName still remembers "name" because of closure
// So console.log(name) => prints "Mozilla".


// What is a Closure?

// A closure is a function that is defined inside another function, and remembers the variables from its
// outer (parent) function when it is completely return, even after the parent function has finished running.

// We can say jab ek pura ka pura function he return kar dete hain tab , sirf vo function return nhi hota balki uska 
// pura lexical scope ( matlb kya kya chize us mai use ho rhi hain un sab ka reference bhi return hota hai) return hota hai.

// Because if an inner function uses variables from the outer function, JavaScript keeps those variables alive
// in memory — it does NOT delete them because the inner function might use them later. (Nature of JS)

// In your code:
// displayName() is a closure because it is defined inside makeFunc() and uses the variable "name" declared in makeFunc()
// Even after makeFunc() is done, displayName() remembers the variable "name".

