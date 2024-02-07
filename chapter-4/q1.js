//for a given array with of students ->[85,97,44,37,76,60]
//find the average marks of the entire class
let students = [85,97,44,37,76,60];
console.log(students);
console.log("total subjects are:",students.length);
let totalstudents = students.length;
let sum = 0;
for(i=0;i<6;i++){
    sum +=students[i];

}
console.log("total marks =:",sum);
let avg = sum/totalstudents;
console.log("average of the total marks = ",avg);

















