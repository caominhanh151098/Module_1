function generaleArray(size, min, max) {
    let array = new Array(size);

    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return array;

}

// let array_1 = generaleArray(30, 200, 100);
// let array_2 = generaleArray(20, 100, 50);
// console.log(generaleArray(30, 200, 100));
// console.log(generaleArray(20, 100, 50).toString());

// document.write(generaleArray(20, 100, 10));

function find(value, array) {
    // console.log(array);
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return true;
        }
    }
    return false;
}

let array = generaleArray(10, 5, 10);
console.log(array);
console.log(find(17, array));