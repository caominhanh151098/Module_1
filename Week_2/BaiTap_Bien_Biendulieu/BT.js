function domath() {
    let a = parseInt(document.getElementById('physics').value);
    let b = parseInt(document.getElementById('chemistry').value);
    let c = parseInt(document.getElementById('biology').value);
    let sum = a + b + c;
    let avg = sum / 3;

    document.getElementById('sum').innerHTML = "Điểm Tổng là: "+ sum;
    document.getElementById('avg').innerHTML = "Điểm Trung bình là: " + avg;
}

function F() {
    let c = parseInt(document.getElementById('celsius').value);
    let f = ((c / 5) * 9) + 32;
    
    document.getElementById('fahrenheit').value = f;
}
function C() {
    let f = parseInt(document.getElementById('fahrenheit').value);
    let c = ((f - 32) / 9) * 5;

    document.getElementById('celsius').value = c;
}

function S() {
    let r = parseInt(document.getElementById('r').value);
    let s = (r * r) * 3.14;

    document.getElementById('nor').innerHTML = "Diện tích đường tròn là: ";
    document.getElementById('result').innerHTML = s;
}

function C() {
    let r = parseInt(document.getElementById('r').value);
    let c = (2 * r) * 3.14;

    document.getElementById('nor').innerHTML = "Chu vi đường tròn là: ";
    document.getElementById('result').innerHTML = c;
}