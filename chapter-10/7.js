class Person{
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }

}
class Engineer extends Person{//inherit by extends 
    work(){
        console.log("solve problems, build something");
    }
    //it will use the new work function of work
// it is called method overriding
}


class Doctor extends Person{//inherit by extends 
    work(){
        console.log("treats Patients");
        //it will use the new work function of work
    }
    // it is called method overriding


}
let mummy = new Person();
let jatinObj = new Engineer();
let nitinObj = new Doctor();



































