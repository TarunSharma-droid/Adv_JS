// Example 9 ==>

  
  let value = true

  let abstract =  new Promise(function(resolve,reject){

     setTimeout(() => {
        if(!value){
           resolve({username : "Tarun" , password : "1234"})
        }

        else reject("ERROR")
     }, 2000);
  })

  abstract
        .then( function(data){  
            console.log(data)
            console.log(data.username)
            return data.username // ye retun jayega next "then" mai agar defined hai to or parameter accept kr rha hai to
        })
        .then( function(newdata){  // Second then
            console.log(`${newdata} is a good boy`)
        })
        .catch( function(anotherData){
            console.log(`${anotherData} ....error aa gyi yar`)
        })
        .finally( function(){ // Finally always runs either the state is resolved or reject.
            console.log("the promise is either resolved or reject")
        }) 

/* NOTE ==> The resolve have message {username : "Tarun" , password : "1234"} this will be input for first .then() .
            The first .then returns data.username this will be input for secoond .then because function has defined 
            parameters and accepting the values.
            That’s how Promise chaining works 
*/