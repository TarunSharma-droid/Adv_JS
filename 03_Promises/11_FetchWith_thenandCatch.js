//  Fetch using .then() and .catch()

// fetch() in JavaScript is a built-in function used to make HTTP requests (like GET, POST, PUT, DELETE) to APIs or 
// servers and receive data in return. It is commonly used for fetching data from an API in asynchronous programming.

// you don't create the resolve/reject yourself — fetch() does that internally.

// If the network is okay, fetch() resolves (goes to .then() or continues in try)
// If there's a network failure, fetch() rejects (goes to .catch() or jumps to catch block


fetch('https://api.github.com/users/TarunSharma-droid')  
// It returns a Promise, which if resolved gives you a Response object — not the actual JS object (Json)
// it means we cannot retrive data from that object by .notation .....
// so we have to convert that object to the real JSON object (through which can we take out the data using .notation)

.then(function(responce){  // First then ==> used to convert the responce object to JSON object if resolve is found.

    return responce.json() // convert in JSON object and return to next this.
})

.then( function(data1){
    console.log("Task is successfull")
    console.log(data1) 
})
.catch( function(data2){ // if reject is given from fetch .....
   console.log("ERROR!")
   console.log(data2)
})

 // Note is we use like ==>  `your data is ${data1}` ==> not valid  ==>  it will show: [object Object]
 // so for this syntax in which we are writing inside the string we have to use the function JSON.stringify )