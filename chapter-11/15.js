function asyncFunc1(){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                    console.log("data1");
                    resolve("success.")
            },5000);
    });
};
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                    console.log("data2");
                    resolve("success.")
            },4000);
    });
};

// this is not a convenient way to do such complex linear work so we can apply then after then function in code 15.js
console.log("fetching data1.........");
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log(res);
    console.log("fetching data2.........");
    let p2 = asyncFunc2();
p2.then((res)=>{
    console.log(res);
});


});
// console.log("fetching data2.........");
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });
