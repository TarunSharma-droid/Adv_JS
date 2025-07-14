// Example 6 ==> promise having asyn function in it.....

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

