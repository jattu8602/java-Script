//for-in loop

let student = {
     name:"Jatin Chourasiya",
     age:20,
     cgpa:9.1,
     isPass: true

};
for (let key in student){
    console.log("key = ",  key, "value = ", student[key] );
}