function Input(value) {
    let n = value;
    let S = document.getElementById("result").value;

    
    if(document.getElementById("cache").innerHTML != 0) {
        document.getElementById("result").value += n;
    } else {
        document.getElementById("result").value = n;
        document.getElementById("cache").innerHTML = 1;
    }

    
}

function backspace() {
    let s = parseInt(document.getElementById("result").value);
        result = parseInt(s / 10);
        if (result == 0) {
            document.getElementById("result").value = null;
        } else {
        document.getElementById("result").value = result;
        }
}

function end() {
    let s = document.getElementById("result").value;
    result = eval(s);
    document.getElementById("result").value = result;
    document.getElementById("cache").innerHTML = 0;
}

