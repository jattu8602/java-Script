//                     SOME IMPORTANT ARRAY METHODS
         //      Map
//create a new array with the result of some operation. The value its callback returns are used to form new array
// map is very same to the forEach function but there is a little bit difference between map and forEach that is map creates new arr but forEach not

// arr.map(callbackFnx(value,index,array))

let nums = [23,34,45];
nums.map((val) =>{
    console.log(val);
})



// or we can store vlaues in other array
let arr = nums.map((val)=>{
    return val;
});
console.log(arr);
