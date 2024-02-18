const employee = {
    calcTax1(){
        console.log("tax rate is 10%");
    },
    // calcTax2 : function(){
    //     console.log("tax rate is 10%");
    // },
    // both the methods of writing the calcTax1 & calcTax2 are same and correct
};
const karanArjun = {
    salary : 50000,
    calcTax1(){
        console.log("tax rate is 20%");
    },
    // **If object & prototype have same method, object's methods will be used.

};
const karanArjun1 = {
    salary : 50000,
};
const karanArjun2 = {
    salary : 50000,
};
const karanArjun3 = {
    salary : 50000,
};
karanArjun.__proto__ = employee;

karanArjun1.__proto__ = employee;

karanArjun2.__proto__ = employee;

karanArjun3.__proto__ = employee;

//we dont need to give ecah karan arjun the function calc tax infact we can use prototype function to assign that work to them