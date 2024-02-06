//template letrals
//a way to have embeded expressions in strings.
//       'this is a template letral'
let specialstring = 'This is a template letral';
console.log(specialstring);
console.log(typeof(specialstring));





let obj = {
    item : "pen",
    price : 10,
};

let output = 'the cost of ${obj.item} is ${obj.price} rupees';
//template leterals
console.log(output);
console.log("the cost of ",obj.item, "is",obj.price );

//new output
let letral = 'this is a template literal ${1+2+3}'
console.log(letral);
console.log("this is a template literal",1+2+3);





