//                           CALL BACK HELL

// Callback Hell : Nested callbacks stacked below one another forming a pyramid structure. (pyramid of Doom)

// This style of programming becomes difficult to understand & manage.

let age = 19;
if(age>18){
    if(age>60){
        console.log("you are senior");
    }
    else{
        console.log("you are adult");
    }/// if  else inside if  is called nested if else

}
else{
    console.log(" you are child");
}