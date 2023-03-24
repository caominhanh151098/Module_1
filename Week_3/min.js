let arr1 = [3, 5, 1, 8, -3, 7, 8];
let arr2 = [7, 12, 6, 9, 20, 56, 89];
let arr3 = [];
let arr4 = [0, 0, 0, 0, 0, 0];

function minInArray(Array) {
    if (Array.length == 0) {
        return 0;
    }
    let min = Array[0];
    for (let i = 1; i < Array.length; i++) {
        if (min > Array[i]) {
            min = Array[i]
        }
    }
    return min;
}


console.log(minInArray(arr1));
console.log(minInArray(arr2));
console.log(minInArray(arr3));
console.log(minInArray(arr4));