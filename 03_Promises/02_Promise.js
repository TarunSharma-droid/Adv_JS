// Promise :

// Example 1}  just simple example to see the working else promise  works perfectly with only async functions.
 
// if resolved ==> then part will executes
// if reject ==> catch part will exeuctes

age = 20

let promise_first = new Promise (function(resolved ,reject){

  if ( age > 18)
     resolved ()

  else 
    reject ()
})

promise_first.then(function(){      // state resolved ho gyi to ye chalega
  console.log('You are adult')
})
promise_first.catch(function(){     // state reject ho gyi to ye chalega
  console.log('You are minor')
})




















