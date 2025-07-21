
class Manager {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  // Getter for fullName — auto-updates whenever first/last name changes
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const m = new Manager("Tarun", "Sharma");
console.log(m.fullName); 

// you want to update both firstName and lastName at once

// Method 1 } success : using the get only

m.firstName = "Amit";
m.lastName = "Verma";
console.log(m.fullName); 

// Method 2 } failure : using the get only

m.fullname = " Raju Don" // does not work here
console.log(m.fullName);



// Method 3}  Use setter function 

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

a.fullName = "Raju Don"; //  internally, the setter will split that full name and update firstName and lastName accordingly.

console.log(a.firstName);  
console.log(a.lastName);   
console.log(a.fullName);   