
// Method 1 )

function Person(name, age) { 

 let  Full_name = name; // name is value to the variable Full_name 
 let  Current_age = age;

}

let p1 = new Person("Tarun", 22); // creating an object p1 of the function Person type.
let p2 = new Person("Raunak", 23);

console.log(p1.Full_name)


// Methdod 2 )

function User(name, age) { 

 this.Full_name = name; // name is value to the property Full_name of this object ( means User object)
 this.Current_age = age;

}

let u1 = new User("Tarun", 22);  // creating an object u1 of the function User type.
let u2 = new User("Raunak", 23);

console.log(u1.Full_name)




// First method will would not work but second does......Because

//🔹 Agar "let/const/var" use karte hai, to local variable banta hai jo sirf function ke andar valid hota hai.
//    Usse object ke bahar (ya object ke through) access nahi kar sakte.

//🔹 Agar "this" use karte hain, to wo object ki property ban jati hai,
//   Jise aap dot notation (obj.property) se kahin bhi access kar sakte ho, jab tak object exist karta hai.
     