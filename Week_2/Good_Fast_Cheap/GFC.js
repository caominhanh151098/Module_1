document.getElementById("Good").addEventListener("click", switchGood);
document.getElementById("Cheap").addEventListener("click", switchCheap);
document.getElementById("Fast").addEventListener("click", switchFast);

function switchGood() {
    let on = "http://127.0.0.1:5500/Week_2/Good_Fast_Cheap/onbtn.jpg"
    let off = "http://127.0.0.1:5500/Week_2/Good_Fast_Cheap/offbtn.jpg"
    if (document.getElementById("Good").src == off)
        document.getElementById("Good").src = on;
    else document.getElementById("Good").src = off;
    if (document.getElementById("Cheap").src == on && document.getElementById("Fast").src == on) {
        document.getElementById("Cheap").src = off;
    }
}

function switchCheap() {
    let on = "http://127.0.0.1:5500/Week_2/Good_Fast_Cheap/onbtn.jpg"
    let off = "http://127.0.0.1:5500/Week_2/Good_Fast_Cheap/offbtn.jpg"
    if (document.getElementById("Cheap").src == off)
        document.getElementById("Cheap").src = on;
    else document.getElementById("Cheap").src = off;
    if (document.getElementById("Fast").src == on && document.getElementById("Good").src == on) {
        document.getElementById("Fast").src = off;
    }
}

function switchFast() {
    let on = "http://127.0.0.1:5500/Week_2/Good_Fast_Cheap/onbtn.jpg"
    let off = "http://127.0.0.1:5500/Week_2/Good_Fast_Cheap/offbtn.jpg"
    if (document.getElementById("Fast").src == off)
        document.getElementById("Fast").src = on;
    else document.getElementById("Fast").src = off;
    if (document.getElementById("Good").src == on && document.getElementById("Cheap").src == on) {
        document.getElementById("Good").src = off;
    }
}