//         EVENT LISTENERS
 // node.addEventListener(event.callback);
 // node.removeEventListener(event, callback);

 // * Note: the callback reference should be same to remove

 let btn1 = document.querySelector('#btn1');
 btn1.addEventListener("Click",(evt)=>{
    console.log("button 1 was clicked handler 1");
    
 });
 btn1.addEventListener("Click",()=>{
    console.log("button 1 was clicked- handler 2");








const handler3 = ()=>{
    console.log("button 1 was clicked handler 3");

 }













 });
 btn1.addEventListener("Click",handler3);
 btn1.addEventListener("Click",()=>{
    console.log("button 1 was clicked- handler 4");
 });
btn1.removeEventListener("Click",handler3)
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
        
//     };

    let div = document.querySelector("div");
// div.onmouseover = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// }

