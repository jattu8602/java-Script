//       SUPER KEYWORD

// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods

// super(args)
// calls Parent's constructor

// super.parentMethod(args)

class Person{
    constructor(){
        console.log("enter parent constructor");
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    

}
class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor");
        super();// to invoke parent class constructor
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("solve problems, build something");
    }
   
}




let engObj = new Engineer("Chemical Engineer");




































