// ++++++++++++++++++++++++++++ Call Back Function +++++++++++++++++++++++++++++++

// A "callback function" is a function passed into asyn function as an argument , which executes when the asyn function
// has compelted its waiting time.

console.log('hello')
console.log('Tarun')
        
setTimeout(function(){   // the function written inside the setTImeOut is a callback function
    console.log('Sharma')
    }, 0) //here it have the waiting time of 0 sec . So it means it is ready to execute just after 0 second.

// but its result will appears in the last as it firsts moves to the Side stack (that is a queue) and meanwhile all
// the synchoronous functions gets exexuted than it moves in main call stack for execution and event loop checks that 
// weather the call stack is empty so that it can send the asyn instrunction to the main call stack for the execution.

console.log('You are learning Web Dev')

// we can also increase its time of execution by giving the time in milliseconds  ===> then also the same result                   


// if any function is given time for waiting ( chahe 0 second he ho time ) then it have to wait in the side stack utill 
// all the remaining line of code given below to it are executing. 








