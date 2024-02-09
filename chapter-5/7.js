//Arrow function

//  Compact way of writing a function


// const functionName = (param1,param2,...)=>{
//     //do some work
// }

//Modern javaScript
const arrowSum = (a,b)=>{
    console.log(a+b);
};

const arrowMul = (a,b)=>{
    console.log(a*b);
};
let val = arrowMul(3,4);
let val2 = arrowSum(3,4);
console.log(val);
console.log(val2);


//calling
const printHello  = ()=>{
    console.log("hello");
}