//ARRAY METHODS
//         SLICE();          returns a piece of the array
//         splice();         change original array (add,remove,replace)

let arr= [1,2,3,4,5,6,7,8];
// arr.splice(2,2,101,102);

//arr.splice(form,delete,add,add,add,add,and so on);



//add element
arr.splice(2,0,101,102);

//Delete Element

arr.splice(3,1,101);

//if only there is one value passes on splice there will be from that value all the next elements will be deleted form that point
arr.splice(4);
console.log(arr);










