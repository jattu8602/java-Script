/*
write a code which can give grades to students according to their scores:
90-100 A;
70-89 B;
60-69 C;
50-59 D;
0-49 F;

*/
alert("welcome");
a = prompt("enter your percentage (1-100%):-")
if (90<=a && a<=100 ){
    alert("Congratulations ! You got A grade ");
}else if (70<=a && a<90){
    alert("Very Good ! You got B grade ");
}else if (60<=a && a<70 ){
    alert("Good ! You got C grade ");
}else if (50<=a && a<60 ){
    alert("You got D grade . Best wishes for next exam  ");
}else if (0<=a && a<50){
    alert("You got F grade . Sorry but you are fail, Better luck for next time");

}else{

    alert("Enter valid number !");
}