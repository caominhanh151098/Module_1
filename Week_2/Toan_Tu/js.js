let inputWidth;
let inputHeight;
let i = 1;

inputWidth = prompt("Nhập chiều DÀI: ");
inputHeight = prompt("Nhập chiều RỘNG: ");

// while (i) {
//     inputWidth = prompt("Nhập chiều DÀI: ");
//     inputHeight = prompt("Nhập chiều RỘNG: ");
//     if (inputHeight > inputWidth) {
//         alert("Chiều rộng lớn hơn chiều dài!! Nhập lại....");
//     }
//     else i = 0;
// }

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width * height;

document.write("Diện tích: " + area);