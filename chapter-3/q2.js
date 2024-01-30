//create a game where you start with any random game number .Ask the user to keep guessing the game number until the user enters correct value







let gameNum = 45;
let userNum  = prompt("Guess the number :");
while (userNum != gameNum){
    userNum   = prompt("You entered wrong number . Guess again:");

}
alert("Congratulations, you entered the right number");






















// let gameNum = Math.random() * 100;
// let userNum = prompt("enter a number between 1 to 100");

// while(userNum != gameNum){
//     if(userNum<gameNum){

//         userNum = prompt("guess higher number");

//     }
//     else if(userNum>gameNum){

//         userNum = prompt("guess lesser number");

//     }
    
//     else{
//         alert("please enter valid number between 1 to 100");
//         userNum = prompt("guess between 1 to 100");

//     }

// }
// // else if(userNum=gameNum){
// //     alert("Congratulations, you entered the right number");
// // }
// alert("Congratulations, you entered the right number");


