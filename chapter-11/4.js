// function hello(){
//     console.log("hello");
// }
// setTimeout(hello, 2000)// timeout : 2 seconds = 2000 mili seconds

console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("hello");
},2000);

console.log("three");
console.log("four");
// this is the example of asynchronous programming
