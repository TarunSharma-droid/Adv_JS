//  Example 7 ==> promise having multiple asyn function in it....shows that two asyn tasks can run in sequence using promises. 


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
 