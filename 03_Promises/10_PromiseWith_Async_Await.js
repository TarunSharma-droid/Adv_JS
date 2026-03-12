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
     const result = await dothis   
     console.log(result)           
   }                               
   catch(data2){
      console.log(data2)
   } 
   }
   consumeThePromise()                      
 
//  1} if dothis get resolve state ==> then result will get some value from await dothis and console will get run.
//  2} if dothis get reject state ==> then Try block start hota hai,
//                                    but await error throw kar deta hai,
//                                    control directly catch block me chala jata hai.
//                                    So result variable kabhi assign hi nahi hota.
//                                    and the value passed to reject() is caught in the catch block as a parameter (here data2).
