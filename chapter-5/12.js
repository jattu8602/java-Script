//                                SOME MORE ARRRAY METHODS
///        Reduce
// performs some operations & reduuces the array to a single value .It returns that single value.
const array1 = [1,2,3,4,5,6,7];
// 0+1+2+3+4+5+6+7

const initialValue = 0;
const sunWithInitial = array1.reduce(
    (accumulator,currentValue)=>accumulator + currentValue,initialValue,
);

console.log(sunWithInitial);
//Expected output : 28


arr = [1,2,3,4,5,6,7,8,9,10];
let output = arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);