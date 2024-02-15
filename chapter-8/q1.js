// create a toggle button that changes the screen to dark-mode when clicked & light -mode when clicked again.

let modeBtn = document.querySelector("#mode");
let currMode = "ITS VALENTINES DAY ";//dark
modeBtn.addEventListener("click",()=>{
   
    if(currMode === "ITS VALENTINES DAY"){
        currMode = "ITS BLACK DAY ";
        document.querySelector("body").style.background = "black";
        // body.classList.add("dark");
        // body.classList.remove("light");
    }
    else{
        currMode = "ITS VALENTINES DAY";
        document.querySelector("body").style.background = "pink";
    //   body.classList.add("light");
    //   body.classList.remove("dark");
    }
    console.log(currMode);
});