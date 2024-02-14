//                      Event handling in JS
//             Node.event = () => {
//                handle here
//                                }
let btn1 = document.querySelector('#btn1');
btn1.onclick = () => {
    console.log("Handler 1");
}
btn1.onclick = () => {
    console.log("Handler 2");
}
// handler 2 is over writed
// handling in javascript is prioritized as the main change rather than the html commits

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("You are inside the div");
    let a= 34;
    a--;
    console.log(a);
}
