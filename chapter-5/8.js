//ForEach Loop in Array 
// arr.forEach(callBackFunction)
// CallbackFunction : Here ,it is a function to execute for each element in the array
// "A callback is a function passed as an argument to another function"
let arr = [1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
});

arr.forEach((val)=>{
    console.log(val);
});

