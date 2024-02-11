// for a given array of numbrs, print the square of each value using the for each loop
arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val**2);
// })
let calcSquare = (num) =>{
    console.log(num*num);
};
arr.forEach(calcSquare);