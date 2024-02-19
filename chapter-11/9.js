function getdata(dataId,getNextData){
    // 2second
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
       
    },2000);
    // console.log("data",dataId);
}

// getdata(1);//2s
// getdata(2);//2s
// getdata(3);//2s
// // all are working at same time

// data 1
// data 2
// data 3



// callback hell
// pyramid doom
// pyramid hell
// problem in javascript
getdata(1,()=>{
    console.log("getting data 2 .........");
    getdata(2,()=>{
        console.log("getting data 3 .........");
        getdata(3,()=>{
            console.log("getting data 4 .........");
            getdata(4);
        });
    });
});