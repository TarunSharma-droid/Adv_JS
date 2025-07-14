// Async - await function can be use in place of then and catch.


let value = true

  let dothis =  new Promise(function(resolve,reject){

     setTimeout(() => {
        if(value){
           resolve({username : "Tarun" , password : "1234"})
        }

        else reject("Big")
     }, 2000);
  })


  async function consumeThePromise(){       

   try{
     console.log(await dothis)
   }
   catch(data2){
      console.log(`${data2} error`)
   }
    
   }

   consumeThePromise()                      

// In async/await, the value passed to resolve() is received by the await expression
// and can be accessed directly. 
// On the other hand, the value passed to reject() is caught in the catch block as a parameter (here data2).

// If you use async/await without handling errors (e.g., using try...catch), 
// and the Promise gets rejected, you will get an unhandled error in the console.