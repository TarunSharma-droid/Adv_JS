// Async - await function can be use in place of then and catch.


let value = true

  let dothis =  new Promise(function(resolve,reject){

     setTimeout(() => {
        if(!value){
           resolve({username : "Tarun" , password : "1234"})
        }

        else reject("ERROR")
     }, 2000);
  })

//   async function consumeThePromise(){        // this is function so have to call it.
 
//      const result = await abstract           // it means consume the promise inside this variable.
//      console.log(result)
//    }

//    consumeThePromise()                       // function call


/* If you use async/await without handling errors (e.g., using try...catch), 
   and the Promise gets rejected, you will get an unhandled error in the console.*/

   
  async function consumeThePromise(){       
     
   try{
     const result = await dothis         
     console.log(result)
   }
   catch{
      console.log('error')
   }
    
   }

   consumeThePromise()                      