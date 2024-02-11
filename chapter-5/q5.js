// take a number n as input form user . Create an array of number form 1 to n .
// Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all number in the array

a = prompt("Enter a number : ");
let arr = [];
for(let i = 1;i<=a; i++){
    arr[i-1] = i;//1(0),2(1),3(2),4(3),5(4),6(5),7(6),8(7)........................................given number(n)(index n-1)


}
console.log("array is :", arr);
let sum = arr.reduce((prev,curr)=>{
    return prev + curr;

})
console.log("sum of all the arr elements is :",sum);
let factorial  = arr.reduce((prev,curr)=>{
    return prev * curr;

})
console.log("factorial is :",factorial);
