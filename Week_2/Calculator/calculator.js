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
    let s = document.getElementById("result").value;
    let string = s.slice(0, (s.length-1));
    console.log(string);
        document.getElementById("result").value = string;
}

function end() {
    let s = document.getElementById("result").value;
    result = eval(s);
    document.getElementById("result").value = result;
    document.getElementById("cache").innerHTML = 0;
}

