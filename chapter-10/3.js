//                 Classes in JS
// class is a program-code template for creating objects.
// Those objects will have some (variables) & some behaviours (functions) inside it.

                                    // class MyClass{
                                    //     constructor(){...}
                                    //     myMethod(){...}
                                    // }
                                    // let myObj = new MyClass();
class ToyotaCar{
    start(){
        console.log("This is a start function.");
    }
    stop(){
        console.log("This is a stop function.");
    }
    setBrand(brand){
        this.brand = brand;
        // both the lhs and rhs brands are different to each other
        // rhs brand is the function parameter brand name
        // lhs brand is called the property of the object
    }
}
let Fortuner = new ToyotaCar();
Fortuner.setBrand("fortuner")
// all properties of toyotacar will be now stored in the fortuner