//function ->2numbers, sum
function myFunction(x,y){
    //local variable ->scope
    //outside of the function the local variables shows the undefined error
    s =x+y;
    console.log("before return");//console will not work below to the return function
    return s;
}
let val = myFunction(3,4);
console.log(val);


