// +++++++++++++++++++ Manually Prototype setting for simple objects ++++++++++++++++++++++

const Human = {
    age : "more then 25",
    location : "Ajmer"
}

const Teacher = {
    makeVideo : true
}

const TeacherAssistance = {
    isAvailable : false
}

const DoubtSupport = { 
    makeAssignment : 'JS Assignments',
    fulltime : true,

    __proto__ : TeacherAssistance  // Syntax 1
}
 // we know that every object has its own prototype => __proto__ 
 // this prototype is used to take referene of Constructor function , any other function (make connection)
 // here this object prototype is pointing (refering) to a function "TeacherAssistance" means accessing
 // the properties of TeacherAssistance.


 TeacherAssistance.__proto__ = Human  // Syntax 2

 Object.setPrototypeOf(Teacher , Human) // Syntax 3 : Works here properly as they are simple objects

 console.log(DoubtSupport.age)