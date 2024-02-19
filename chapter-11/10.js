//                   PROMISES


// Promise is for "eventual" completion of task. It is an object in Js.
// It is a solution to callback hell.


// let promise = new Promise ((resolve,reject)=>{
//     . .   . . 
//     //function with 2 handlers
// })


// resolve & reject are callbacks provided by JS

//There are three states :--
// 1.pending
// 2.fulfiled(resolved)
// 3.rejected
let promise = new Promise((resolve,reject)=>{
    console.log("I am a Promise.");
    resolve("some error occured");
});













