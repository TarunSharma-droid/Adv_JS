// "new" => use krte he naya object/instance create hota hai .
// And is "new" keyword ke through he constructor function call hota hai.

// Method 1 )

function Person(name, age) { 

 let  Full_name = name; 
 let  Current_age = age;

}

let p1 = new Person("Tarun", 22); // creating an object p1 of the function Person type and parsing the values in it.
let p2 = new Person("Raunak", 23);

console.log(p1.Full_name) // will not return anything as Full_name has no scope outside the function.


// Methdod 2 )

function User(name, age) { 

 this.Full_name = name; // name is value to the property Full_name of this object ( means User object)
 this.Current_age = age;

}

let u1 = new User("Tarun", 22);  // creating an object u1 of the function User type and parsing the values in it.
let u2 = new User("Raunak", 23);

console.log(u1.Full_name)

//  It is the syntax rule that when we define properties inside a constructor function, we must use the "this" keyword.
// ( but not necessary for object literals)


// Method 1 will would not work but second does......Because when we make the object by constructor method =>

//🔹 Agar "let/const/var" use karte hai, to local variable banta hai jo sirf function ke andar valid hota hai.
//    Usse object ke bahar (ya object ke through dot notation se) access nahi kar sakte.

//🔹 Agar "this" use karte hain, to vo object ki property ban jati hai,
//   Jise aap dot notation (obj.property) se kahin bhi access kar sakte ho, jab tak object exist karta hai.
     
console.log(this)