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


// Example 3 ==> promise having asyn function in it.....


let cooking = new Promise(function(resolve, reject) { // Ek naya Promise create ho raha hai

  setTimeout(() => {                      //  Jaise hi Promise create hota hai, setTimeout ka 3 second ka timer turant start ho jaata hai
    console.log("Pizza tayar ho gaya!");  //  3 second baad yeh message console pe print ho jaata hai
    resolve();                            //  printing ke bad resolve call kr diya : yeh signal deta hai ki Promise ka kaam successfully 
 }, 3000);                                //  complete ho gaya — ab .then() wala part activate hoga aur uske andar ka function run hoga.


}); 

cooking.then(function() {
  console.log("Pizza ko serve kar diya"); 
});



// Example 4 ==> promise having asyn function in it.....

let age = 6

let promise_done = new Promise(function (resolve, reject) {

  setTimeout(() => {
    if (age > 18) resolve("i am demon");

    else reject("i am tarun");

  }, 1000);
});

promise_done
  .then(function () {
    console.log("You are adult");
  })
  .catch(function (data) {
    console.log(`${data} You are minor`);
  });

// Here reject is running ==> still not getting error in the console. Because using .then and .catch()
// Otherwise If async/await is used without a try...catch, and the Promise is rejected, you'll sure get 
// an error in the console .

// Example 5 +++++++++++ another syntax of promises ++++++++++++++


new Promise(function(resolve ,reject){

  setTimeout( function(){
    console.log('Superman')
    resolve()
  },6000)

}).then(function(){

  console.log("best superhero")
})



// Example 6 ++++++++++ another syntax of promises +++++++++++++++


const solid = new Promise(function(resolve,reject){

  setTimeout(function(){ // promise bante he setTimeout ka timer start ho gya.. timer katam hote he resolve call ho gya to ab "then" chalega.

    resolve( {username : 'Tarun' , password : '12345'} )  // resolve call hua or us mai data de diya....ye data "then" mai transfer ho jayega..
  },2000)

})

solid.then(function(data){
   console.log(data)
})



//  Example 7 ==> promise having multiple asyn function in it..... show that two asyn tasks can run in sequence using promises. 


let promiseOne = new Promise(function(resolve, reject) { 
                     
  setTimeout(() => {                     
    console.log("First task takes 6 second to complete"); 
    resolve();                           
 }, 6000);                                

}); 


promiseOne.then(function() {
  console.log("First promise is completed succesfully");

  setTimeout(() => {
    console.log("Second task takes 3 second to complete");
  },3000)

});  
 


//Example 8 ==> multiple asyn functions having different time 
 

let promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Tarun");
    resolve();
  }, 6000);
});

// Execute all in sequence using promise chaining

promiseFour.then(() => {
              console.log("Tarun is printed");
              return doThis(); 
            })
            .then(() => {              // this syntax ensures one-after-another execution, not parallel
              return newtask(); 
            })
  
// 📌 It is important to use Promises inside functions like doThis() and newtask()
//     because if we don’t, they will just behave like simple setTimeout functions.
// 📌  In that case, both functions run at the same time (in parallel),
//     and the one with the shorter delay may finish first — breaking the sequence.

function doThis() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Sharma");
      resolve();   // resolve() is required here, because unless this Promise resolves, the next .then() (which triggers newtask())              
    }, 4000);      // will not start. Without resolve(), the chain breaks. // So we can say resolve() is the key for next function.
  });
}


function newtask() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("MBBS");
      resolve(); // here we can ignore this resolve because  here the completion of this promise will not trigger any further function.
    }, 3000);    // But remember if we ignore resolve() here, the chain will hang and the final .then() (if added) will never execute.
  });
}

/* the second .then() does not taking any input from the first .then so in case if "doThis" function returns some value or give some value
to resolve written inside it like  resolve("hello") then also it will not be passed to second .then as second .then is not accepting any parameters. */



// Example 9 ==>

  
  let value = true

  let abstract =  new Promise(function(resolve,reject){

     setTimeout(() => {
        if(value){
           resolve({username : "Tarun" , password : "1234"})
        }

        else reject("ERROR")
     }, 2000);
  })

  abstract
  .then( function(data){   // First then
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
  .finally( function(){ // Finally always runs.....
    console.log("the promise is either resolved or reject")
  }) // this always runs either the state is resolved or reject.

/* NOTE ==> The first .then() returns data.username.
            That returned value automatically becomes the input to the next .then() — newdata as function is accepting the parameter.
            That’s how Promise chaining works 

*/