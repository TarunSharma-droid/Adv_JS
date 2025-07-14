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
              return doThis(); // printing ke bad doThis function pe jao or usko execute karo.
            })
            .then(() => {              // this syntax ensures one-after-another execution, not parallel
              return newtask(); 
            })

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
      resolve(); // here we can ignore this resolve because the completion of this promise will not trigger any further function to execute.
    }, 3000);    // But remember if we ignore resolve() here, the chain will hang and the final .then() (if added) will never execute.
  });
}

// 📌 It is important to use Promises inside functions like doThis() and newtask()
//     because if we don’t, they will just behave like simple setTimeout functions.
// 📌  In that case, both functions run at the same time (in parallel),
//     and the one with the shorter delay may finish first — breaking the sequence.


// Rememeber the value returned from first .then will be transfer to the second .then as input only if the second .then
// is excepting those values by definiing some paramenters in the function..

// Here in the above example first .then is returning a function (doThis) . 
// If in case retun was returning some value ro the function (doThis) is returning some value then also it will not be transfer to the 
// second .then as  the second .then is not accepting any parameter here.