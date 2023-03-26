console.log(checkNumber('a'))

function checkNumber(a) {
    if (Number(a) > 0 && Number(a) < 9) {
        return true;
    }
    return false;
}