//     brand name using constructor
class ToyotaCar{
    constructor(brand,milage){
        console.log("creating an object");
        this.brand = brand;
        this.milage = milage;

    }
    start(){
        console.log("This is a start function.");
    }
    stop(){
        console.log("This is a stop function.");
    }
}
let Fortuner = new ToyotaCar("Fortuner",23);//constructor
console.log(Fortuner);
let lamborgini = new ToyotaCar("lambo......",12);//constructor
console.log(lamborgini);