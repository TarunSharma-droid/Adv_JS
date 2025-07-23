// you want to update both firstName and lastName at once

// 1 } Only getter function
class Manager {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const m = new Manager("Tarun", "Sharma");
console.log(m.fullName); 

// Method 1 } success : using the get only

m.firstName = "Amit";
m.lastName = "Verma";
console.log(m.fullName); 

// Method 2 } failure : using the get only

m.fullname = " Raju Don" // does not work here
console.log(m.fullName);



// 2 } Using getter as well as setter

class Admin {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // setter
  set fullName(value) {
    const [first, last] = value.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
}

const a = new Admin("Tarun", "Sharma");

console.log(a.fullName);   

a.fullName = "Raju Don"; // Method 2 is applicable here => internally, (the setter will split
                         // that full name and update firstName and lastName accordingly.)
 
console.log(a.firstName);  
console.log(a.lastName);   
console.log(a.fullName);   

// Conclusion : 
//    If you change firstName or lastName individually:
//    The getter (get fullName) is automatically used when you access `fullName`.
//    It *dynamically* reflects the current values of firstName and lastName.

//    If you assign a new value to fullName (like a.fullName = "Raju Don"):
//    The setter (set fullName) is triggered.
//    It *splits* the new full name and updates both firstName and lastName.