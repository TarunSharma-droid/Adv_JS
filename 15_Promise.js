// Promise :

// // Example 1}
 
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



// // Example 2


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
 }, 3000);                                //  complete ho gaya — ab .then() wala part chalayenge


}); 

//  Jab resolve() call ho jaata hai (yaani Promise fulfilled ho jaata hai) tab .then() activate hota hai aur uske andar ka function run hota hai.

cooking.then(function() {
  console.log("Pizza ko serve kar diya"); // ✅ Jab Promise resolve hota hai tab yeh line chalti hai
});


//  Example 4 ==> promise having multiple asyn function in it..... show that two asyn tasks can run in sequence using promises. 


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

// The code successfully show that two asynchronous tasks with different durations can run in sequence using Promises.


//  Example 5 ==> multiple asyn functions having different time 

// let promiseThree = new Promise ( function( resolve , reject ){

//   setTimeout ( () => {
//       console.log("Tarun")
//       resolve()
//     }, 6000 )
//   })

//   promiseThree.then(  // after execution of console.log("Tarun") , resolve is called so ==> "then" will run....
    
//     function(){
//       console.log("Tarun is printed")
//       one()       // do this function is called here
     
//   })



//  function one(){  
//   let promiseFour = new Promise ( function(resolve,reject){  // created a promise inside this function . 

//     setTimeout ( () => { // starts timing when one() is called in promiseThree.then
//       console.log("Sharma")
//       resolve()
//     }, 4000 )
//   })
  
//     promiseFour.then( // after resolve is called then will run
//        function(){
//         two()  // two is called here so now timer for two will start
//        })
//   }

//  function two(){
//   let promiseFive = new Promise ( function(resolve,reject){

//     setTimeout ( () => {
//       console.log("MBBS")
//       resolve()
//     },3000 )
//   })
//   }            // Still not the best clean code


  
// Cleanest code..

let promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Tarun");
    resolve();
  }, 6000);
});

// Execute all in sequence using promise chaining

promiseThree.then(() => {
              console.log("Tarun is printed");
              return doThis(); 
            })
            .then(() => {              // this syntax ensures one-after-another execution, not parallel
              return newtask(); 
            })
  
//  📌 It is important to use Promises inside functions like doThis() and newtask()
//     because if we don’t, they will just behave like simple setTimeout functions.
// 📌  In that case, both functions run at the same time (in parallel),
//     and the one with the shorter delay may finish first — breaking the sequence.

function doThis() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Sharma");
      resolve();   // resolve() is required here, because unless this Promise resolves, the next .then() (which triggers newtask())              
    }, 4000);      // will not start. Without resolve(), the chain breaks.
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

