// REMEMBER =>
// If you call a function directly like this:  myFunction();
// It will execute immediately — right when the JavaScript engine reaches that line during the script execution.

// ASo that is why we should never pass a function call to setTimeout directly,
// because setTimeout is meant to execute a function after a delay.

// For example,
// If you pass a function call like => setTimeout(func(), 4000),
// it means you're calling the function immediately as the script runs,
// and passing its return value to setTimeout.

const student = {
  label: "Submit",
  work: function () {
    console.log(`Assignemt: ${this.label}`);
  }
};


setTimeout(student.work, 1000) // => correct syntax for setTimeout => still not run

// Here, you're not calling student.work(), you're just giving setTimeout a After 1000ms,
// JS calls that function like of the function.
// After 1000ms, JS calls this copy of function in which "this" is not set yet - and not calling 
// the actual function inside the object (it's a plain function call, not tied to any object )

// Matlab aapne pehle setTimeout mai sirf definition di jisme "this" kisi ko refer he nhi kr raha hai,
// aur jab delay complete hua to wahi definition run hui jisme "this" set nhi tha — na ki setTimeout ne object 
// actual ke function ko call kiya.


// So have to use bind()
setTimeout(student.work.bind(student), 1000);

//  We pass the same function definition,
//  BUT we explicitly bind `this` to `student`,
//  So even when setTimeout runs it later, `this` will always refer to `student`.