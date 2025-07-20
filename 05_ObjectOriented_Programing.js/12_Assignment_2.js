
// Wants to a give aspecial kind pf property to the string....
// This property should return the actual length of the string excluding spaces.

const str = "Tarun   "

String.prototype.actual_length = function(){

    console.log(`${this}`) // ==> it tells ki "this" mai kya aa raha hai
    console.log(`Actual length is ${this.trim().length}`)
}

str.actual_length() 


const abc = "I am Great"
abc.actual_length() // only works when the spaces are in the end.


"Ramunujan    ".actual_length()