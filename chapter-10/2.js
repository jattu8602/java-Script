const employee = {
    calcTax1(){
        console.log("tax rate is 10%");
    },
    calcTax2 : function(){
        console.log("tax rate is 10%");
    },
    // both the methods of writing the calcTax1 & calcTax2 are same and correct
};
const karanArjun = {
    salary : 50000,
};
karanArjun.__proto__ = employee