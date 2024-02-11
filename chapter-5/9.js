let arr = ["jatin","nitin","jattu","justin","ramansh"];
arr.forEach(function printval(idx,val){
    console.log(idx,val);
});
arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});