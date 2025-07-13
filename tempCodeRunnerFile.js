// Promise :

// // // Example 1}
 
// // if resolved ==> then part will executes
// // if reject ==> catch part will exeuctes

// age = 20

// let promise_first = new Promise (function(resolved ,reject){

//   if ( age > 18)
//      resolved ()

//   else 
//     reject ()
// })

// promise_first.then(function(){      // state resolved ho gyi to ye chalega
//   console.log('You are adult')
// })
// promise_first.catch(function(){     // state reject ho gyi to ye chalega
//   console.log('You are minor')
// })



// // // Example 2


// const random = Math.floor(Math.random() * 10 + 1) // 1 to 10

// let promise_second =  new  Promise (function(resolved , reject){

//   if (random > 5)   reject()

//   else resolved()
// })

// promise_second.then(function(){
//   console.log("no is smaller then five or equal to 5")
// })

// promise_second.catch(function(){
//   console.log("no is greater then five ")
// })


// // Example 3 ==> promise having asyn function in it.....

// let cooking = new Promise(function(resolve, reject) { // Ek naya Promise create ho raha hai

//   setTimeout(() => {                      //  Jaise hi Promise create hota hai, setTimeout ka 3 second ka timer turant start ho jaata hai
//     console.log("Pizza tayar ho gaya!");  //  3 second baad yeh message console pe print ho jaata hai
//     resolve();                            //  printing ke bad resolve call kr diya : yeh signal deta hai ki Promise ka kaam successfully 
//  }, 3000);                                //  complete ho gaya — ab .then() wala part chalayenge


// }); 

// //  Jab resolve() call ho jaata hai (yaani Promise fulfilled ho jaata hai) tab .then() activate hota hai aur uske andar ka function run hota hai.

// cooking.then(function() {
//   console.log("Pizza ko serve kar diya"); // ✅ Jab Promise resolve hota hai tab yeh line chalti hai
// });


// //  Example 4 ==> promise having multiple asyn function in it.....
