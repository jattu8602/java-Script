function getData(dataId,getNextData){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
};
//               Promises
// A javascript Promise object can be:
// Pending: the result is undefined
// Resolved: the result is a value(fulfilled)                 resolve(result)
// Rejected: the result is an error object                    reject(error)

// Promise has state (pending, fulfiled ) & some result (result for resolve & error for reject).






