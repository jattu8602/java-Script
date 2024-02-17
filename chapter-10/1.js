//                                Classes and Objects 

//         Prototypes in JS
// A javascript object is an entity having state and behavoiur ( properties ) and methods.
// JS objects have a special property called prototype.
// We can set prototype using  __ proto __

// **If object & prototype have same method, object's methods will be used.

const student = {
    fullName : " jatin chourasiya",
    marks : 45.3,
    printMarks : function(){
        console.log("marks = "+ this.marks);
        // this is an keyword 
    }
};