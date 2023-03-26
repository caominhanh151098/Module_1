let arr = ["3123", "213123", "123123132", "213123450", "378657", "63345"];

console.log(reverse(arr));

function reverse(arr) {
    let arr_1 = new Array(arr.length);
    for (let i = 0; i < arr_1.length; i++) {
        arr_1[i] = arr[arr.length - i - 1];
    }

    return arr_1;
}