//largest number of an array

let arr= [2.,4,5,6,6,7,5,476];
const output = arr.reduce((prev,curr)=>{
    return prev>curr ?     prev:curr;
    //if previous is greater then
   
    // return prevoius otherwise return current vlaue

});
console.log(output);







