// let students = ["Đạt", "Anh", "Trường", "Duy"];
// students.sort();
// console.log(students);
// 
let ages = [21, 2, 11, 8, 1, 12];
ages.sort(function(a, b) {
    return 0.5 - Math.random();
});
console.log(ages);