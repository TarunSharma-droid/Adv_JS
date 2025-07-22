// Lexical Scoping : Function defined inside the outer function will have access to all the variables of outer function.

    function init() {

        let name = "Mozilla"; 

        function displayName() {
            console.log(name); // since name is variable so we dont need "this"

            let age = 23;
        }

    //  function displayAge() {
    //      console.log(age);   // Bhai-Bhai sharing is not allowed ( only father to son is allowed)
        
    //  }

        displayName() // => agar use nhi karegne to sirf displayName banega to shi but run nhi hoga.
    //  displayAge() 

    }
    init();

 