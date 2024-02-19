// You are creating a website for your college. Create a class User with 2 properties , name & email. It also have a method called viewData() that allows user to view website data.
let DATA = "secret information";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;

    }
    viewData(){
        console.log("Data = "+ DATA);
    }

}
let student1 = new User("shraddha","abc@gmail.com");
let student2 = new User("jatin","chaourasiyajaitn68@gmail.com");

let teacher1 = new User("dean","dean@gmail.com")