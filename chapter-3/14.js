//string methods in js
let str = "0123456789";
let str1 = "jatin";
let str2 = " chourasiya"
//       1>str.slice(start,end?)                  //returns part of string
console.log(str.slice());
console.log(str.slice(4));
console.log(str.slice(2,5));
//       2>str1.concat(str2)                      //joins str2 with str1
console.log("hello 123 "+str1);
console.log("hello 123 ".concat(str1));
console.log(str1 + str2);
console.log(str1.concat(str2));
//       3>str.raplace(searchVal,newVal)          //replaces string value
console.log(str.replace("34567","jatin"));

//       4>str.charAt(idx)                        //
console.log(str.charAt(3));
console.log(str1.charAt(4));
// kisi bhi string ko main value se change nahi kar sakte hain 
// iske liye hume naya let variable banana hoga