console.log(factorial(5));

function factorial(a) {
    let multi = 1;
    for (let i = 1; i <= a; i ++) {
        multi *= i;
    }
    return multi;
}