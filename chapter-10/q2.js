// Create a new class called Admin which inherits form User. Add a new method called editData to Admin that allows it to edit website data.
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
class Admin extends User{
    constructor(name , email){
        super(name,email);

    }
    editData(){
        Data = "some new value";
    }
}
let student1 = new User("shraddha","abc@gmail.com");
let student2 = new User("jatin","chaourasiyajaitn68@gmail.com");

let teacher1 = new User("dean","dean@gmail.com")
let admin1 = new Admin("admin","admin@collegegmail.com");