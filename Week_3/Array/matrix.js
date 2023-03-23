//maxtrix[5][7]
//random(10-50);

let matrix = new Array(5);

for (let i = 0; i < 5; i++) {
    matrix[i] = new Array(7);
    for (let j = 0; j < 7; j++) {
        matrix[i][j] = Math.floor(Math.random() * 51 + 10);
    }
}

console.log(matrix);