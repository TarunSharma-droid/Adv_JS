
let myHeroes =[ "thor","spiderman","flash"] // array

let heroPower = { // Object literal
    thor : "Hammer",
    spiderman : "web",
    flash : "speed",

    print_Message : function(){                         // this function belong to heroPower object only
        console.log(`The best power is ${this.thor}`)   // cannot access directly because it is not a varaible (it is the property of function)
    }                                                   // To access properties of the same object, you need to use the this keyword:
}

Object.prototype.status = function(){         // status property is loaded to the every object we have framed or we will frame
                                              // because we have uses the keyword "Object" .
    console.log("This is a valid object")
}


heroPower.print_Message()

heroPower.status()  // success => shows status is loaded into the heroPower function

myHeroes.status()   // success => because array is also an object in the JS and status() is also loaded to it.