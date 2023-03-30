function Student(name, gender, dob, email, hobbies) {
    this.name = name;
    this.gender = gender;
    this.dob = dob;
    this.email = email;
    this.hobbies = hobbies;
}

let phuoc = new Student("Phuoc", true, "10/10/2001", "phuoc@gmail.com", ["Đọc sách", "Đọc báo"]);



console.log(phuoc);