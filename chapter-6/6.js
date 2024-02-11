//      Dom manupulation

// if we add script tag in head rather than body  then we cannot perform dom = as error it will show = "null"

// selecting with id
// document.getElementById("myId");
let heading = document.getElementById("heading-class");// h1
console.log(heading);

// selecting with class
// document.getElementsByClassName("myClass");
let headings = document.getElementsByClassName("heading-class");//h1
console.log(headings);//returns html collection

//selecting with tag
// document.getElementsByTagName("p");
let elements = document.getElementsByTagName("p");
console.log(elements);



















