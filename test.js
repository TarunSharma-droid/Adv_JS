
  let value = false

  let abstract =  new Promise(function(resolve,reject){

     
        if(!value){
           resolve({username : "Tarun" , password : "1234"})
        }

        else reject("ERROR")

  })

  abstract
  .then( function(data){
    console.log(data)
    console.log(data.username)

    return data.username // ye retun jayega next this mai agar defined hai to
  })
  .then( function(newdata){
    console.log(`${newdata} is a good boy`)
  })
  .catch( function(anotherData){
    console.log(`${anotherData} ....error aa gyi yar`)
  })

