let newBtn = document.createElement("button");
newBtn.innerText  = "click me";
console.log(newBtn);

let div = document.querySelector("div");
// div.append(newBtn);                  for at the end of the div but inside the div
//div.prepend(newBtn);                  for at the top of the div but inside the div
//div.before(newBtn);                   it will display Element(button) to the top of the div but outside the div
//div.after(newBtn);                    it will display element(button ) to the below of the div but also outside the div


// for example:-
div.after(newBtn);
div.remove(newBtn); // it removes the whose div and only the button (element ) will remains there 