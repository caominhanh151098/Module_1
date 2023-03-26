let arr = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'C', 'o', 'd', 'e', 'g', 'y', 'm', '!', '!'];

function find(arr, characters) {
    let count = 0;
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] == characters)
            count ++;
    }

    return count > 0 ? count : -1;
    
}

console.log(find(arr, 'e')); 