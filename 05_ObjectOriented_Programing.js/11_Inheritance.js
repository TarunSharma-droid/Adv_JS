
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

    __proto__ : TeacherAssistance 
}
 // we know that every object has its own prototype => __proto__ 
 // this prototype is used to take referene of Constructor function , any other function (make connection)
 // here this object prototype is pointing (refering) to a function "TeacherAssistance" means accessing
 // the properties of TeacherAssistance.


 TeacherAssistance.__proto__ = Human // another syntax to access properties of another object.

 Object.setPrototypeOf(Teacher , Human) // another syntax to access properties of another object.
 // Teacher have access to the property of Human.