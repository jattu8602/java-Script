//Create a function using the "funciton" keyword that takes a String as an argument & returns the number of vowles in the string.
function countVowels(str) {
  //"Apna College",count = 5
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
a = countVowels("jatin chourasiya");
console.log(a);
