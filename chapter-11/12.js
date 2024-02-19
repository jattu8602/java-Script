                              // PROMISE

         // .then() & .catch()                     
const gerPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        // resolve("success")
        reject("network error");
    });
};
let promise = gerPromise();
promise.then((res)=>{
    console.log("Promise fulfilled",res);
});
promise.catch((err)=>{
    console.log("rejected",err);
})