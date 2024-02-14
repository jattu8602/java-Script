//                   Event Object
// It is a special object that has details about the event
// All event handlers have access to the Event Object,s properties and methods

//                 node.event = (e) =>
//                      handle Here 
//                      }

//      e.target,e.type,e.clientX,e.clientY
let btn1 = document.querySelector('#btn1');
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
        
    };

    let div = document.querySelector("div");
div.onmouseover = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
}

