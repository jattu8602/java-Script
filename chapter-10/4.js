//                 Classes in JS
// constructor() method is :
// automatically invoked by new
// initializes object

                        // class MyClass{
                        //     constructor(){...}
                        //     myMethod(){...}

                        // }

                        class ToyotaCar{
                            constructor(){
                                console.log("hello! this is a constructor");
                            }
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
                        Fortuner.setBrand("fortuner");
                        let lexus = new ToyotaCar();
                        lexus.setBrand("lexus");
                        // all properties of toyotacar will be now stored in the fortuner
