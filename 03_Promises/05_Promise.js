// Example 4 +++++++++++ another syntax of promises ++++++++++++++


new Promise(function(resolve ,reject){

  setTimeout( function(){
    console.log('Superman')
    resolve()
  },6000)

}).then(function(){

  console.log("best superhero")
})



// Example 5 ++++++++++ another syntax of promises +++++++++++++++
// Passing some values in resolve ... so we have to define parameter in the then fucntion to hold these values.


const solid = new Promise(function(resolve,reject){

  setTimeout(function(){ 
    resolve( {username : 'Tarun' , password : '12345'} )  // resolve call hua or us mai data de diya....ye data "then" mai transfer ho jayega..
  },2000)

})

solid.then(function(data){ // here data is defined to hold the value coming from the resolve.
   console.log(data)
})