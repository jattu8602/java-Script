// create a new button element . Give it a text "click me", background color of red & text color of white.
// insert the button as the first element inside the body tag.
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
newBtn.style.color = "white";
newBtn.style.background = "red";
console.log(newBtn);
let body = document.querySelector("body");
body.prepend(newBtn);
