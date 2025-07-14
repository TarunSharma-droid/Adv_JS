// Example 2


const random = Math.floor(Math.random() * 10 + 1) // 1 to 10

let promise_second =  new  Promise (function(resolved , reject){

  if (random > 5)   reject()

  else resolved()
})

promise_second.then(function(){
  console.log("no is smaller then five or equal to 5")
})

promise_second.catch(function(){
  console.log("no is greater then five ")
})