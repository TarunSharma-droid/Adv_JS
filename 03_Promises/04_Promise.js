// Example 3 ==> promise having asyn function in it.....


let cooking = new Promise(function(resolve, reject) { 

  setTimeout(() => {                      //  Jaise hi Promise create hota hai, setTimeout ka 3 second ka timer turant start ho jaata hai
    console.log("Pizza tayar ho gaya!");  //  3 second baad yeh message console pe print ho jaata hai
    resolve();                            //  printing ke bad resolve call kr diya : yeh signal deta hai ki Promise ka kaam successfully 
 }, 3000);                                //  complete ho gaya — ab .then() wala part activate hoga aur uske andar ka function run hoga.


}); 

cooking.then(function() {
  console.log("Pizza ko serve kar diya"); 
});