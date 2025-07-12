
console.log('hello')
console.log('Tarun')
        
setTimeout(function(){
    console.log('Sharma')
    }, 0) // setTimeout is a Asynchoronous function . here it have the run time of 0 sec . means take 0 time to execute

// but its result will appears in the last as it firsts moves to the Side stack that is a queue and meanwhile all
// the synchoronous functions gets exexuted than it moves in main call stack for execution.

console.log('You are learning Web Dev')


// we can also increase its time of execution by giving the time in milliseconds                    

// JS is single threaded means at one time one thing will get executes.
// By default JS is Synchorounous means follows a order to execute the line of code . does not move on second utill first is completed.

// in Asynchoronous JS also single threeding is followed means one line of code is executing at time. But here order is not followed
// if any function is given time for execution ( chahe 0 second he ho time ) then it have to wait in the side stack utill all the remaining 
// line of code given below to it are executing. 


// the function written inside the setTImeOut is a callback function it will only get executes after the completion of the 
// time given but after all the syn instructions are executed.

// A callback function is a function passed into another function as an argument , which is then involved inside the outer
// function to complete an action.

// Call Back Hell ==> Nested callbacks stacked below one another forming a pyramid structure. (pyramid of doom)
// This type of programming becomes difficult to understand and manage.

