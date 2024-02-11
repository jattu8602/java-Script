//                     SOME MORE ARRAY METHODS
///          Filter
////   create a new array of elements that give true for a condition/filter.
///// Eg: all even elements

//////      let newArr = arr.filter((val){
//               return val%2 ===0;
//                       })

let arr = [1,2,3,4,5,6,7,8,9];
let evenArr = arr.filter((val)=>{
    return val%2 ===0;
});
console.log(evenArr);

