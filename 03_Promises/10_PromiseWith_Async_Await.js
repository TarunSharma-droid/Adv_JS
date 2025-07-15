//  Promise using Async - await ( with try and catch) in the place of .then and .catch

//  { async/await is a cleaner and more modern alternative to .then() and .catch() }

let value = true

  let dothis =  new Promise(function(resolve,reject){

     setTimeout(() => {
        if(value){
           resolve({username : "Tarun" , password : "1234"})
        }

        else reject("Error")
     }, 2000);
  })

  
  async function consumeThePromise(){       

   try{
     const result = await dothis   // if dothis get resolve state ==> then result will get some value from await dothis and console will get run.
     console.log(result)           // otherwise if dothis get reject state ==> then result will not get any value and code directly moves to catch block.
   }                               // and the value passed to reject() is caught in the catch block as a parameter (here data2).
   catch(data2){
      console.log(data2)
   } 
   }
   consumeThePromise()                      

