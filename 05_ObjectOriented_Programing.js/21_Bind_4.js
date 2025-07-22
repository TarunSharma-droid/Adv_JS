
const person1 = {
  name: "Tarun",
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  }
};

const person2 = {
    name: "Shivank" };

// const greetShivank = person1.greet => means only passing function defination

const greetShivank = person1.greet.bind(person2) // this set to person2 explicitly
greetShivank();  

// It means function ki copy to person 1 se mili hai but name ki value person2 mai se milli hai 
// kyoki this ko person2 pe set kr diya hai 