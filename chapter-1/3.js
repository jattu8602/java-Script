// variable rules-
/*

*> variable names are case sensitive ; "a" & "A" is different.
*> only letters , digits, underscore(_),and $ is allowed .(not even space).
*> only a letter , underscore (_) or $ should be 1st character.
*> Reserved words cannot be variable names.

*/
isFollow = "jatin";
console.log(isFollow);

/*
let , const and var

var - Variable can be re-declared & updated. A global scope variable.

let - Variable cannot be re-declared but can be updated . A block scope variable.

const - Variable cannot be re-declared or updated. A block scope variable.
*/


// let 
let name = "jattu";
let age  = 45;
age = 56;
console.log(name);
console.log(age);
{
    let a = 5;
    console.log(a);
}
{
    let a = 6;
    console.log(a);
}//these are called blocks


// var 
var namee =  "nitin";
var agee = 78;
var agee = 95;
console.log(namee);
console.log(agee);


const a = 67;// const declaration must be defined at same time
console.log(a);
a = 45;
console.log(a);



