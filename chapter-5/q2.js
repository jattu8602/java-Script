//create an arrow function to perform the q1.js task
const countVowels = (str) => {
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