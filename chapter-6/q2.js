// Create 3 divs with common class name - "box". Access them & add some unique text to each fo them
let divs = document.querySelectorAll(".box");
for(div of divs){
    console.log(div.innerText);
}

let idx = 1;
for(div of divs){
    div.innerText = 'new value';
    // div.innerText=idx;
        idx++;
}

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";







































