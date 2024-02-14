//                      Event handling in JS
//             Node.event = () => {
//                handle here
//                                }
let btn1 = document.querySelector('#btn1');
btn1.onclick = () => {
    console.log("btn1 was clicked;");
    let a = 45;
    a++;
    console.log(a);
}

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("You are inside the div");
    let a= 34;
    a--;
    console.log(a);
}