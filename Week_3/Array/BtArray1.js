// Thêm 1 phần tử vào cuối mảng
// thêm nhiều phần tử vào cuối mảng
// xóa phần tử vào đầu mảng
// thêm 1, nhiều phần từ vào đầu 
// chèn nhiều phần tử vào giữa mảng
// dùng splice để thêm đầu/cuối mảng


let numbers = [1, 2, 3, 4, 5];

// let len = numbers.push(6);
// numbers.push(7, 8, 9);
// numbers.unshift(0);
// numbers.unshift(-2, -1);
// numbers.pop();
// numbers.shift();

// numbers.splice(2, 0, 0, 0, 0);
// numbers.splice(numbers.length - 2, 2);
// numbers.splice(numbers.length, 0, 10, 10, 10);
// numbers.splice(0, 0, 11, 11, 11);
numbers.splice(1, 3, 12, 13, 14);



console.log(numbers);


