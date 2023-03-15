window.addEventListener("keydown", keymove);


function keymove(event) {
    let key = event.keyCode;
    
    switch (key) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
    }
}

function moveRight() {
    let cache = parseInt(document.getElementById("cache").innerText);
    if (cache != 11 || cache != 21 || cache != 31) {
        document.getElementById(cache).src = document.getElementById(cache-1).src;
        document.getElementById(cache-1).src = "";
        cache -= 1;
        document.getElementById("cache").innerText = cache;
    }
    win(cache);
}

function moveLeft() {
    let cache = parseInt(document.getElementById("cache").innerText);
    if (cache != 13 || cache != 23 || cache != 33) {
        document.getElementById(cache).src = document.getElementById(cache+1).src;
        document.getElementById(cache+1).src = "";
        cache += 1;
        document.getElementById("cache").innerText = cache;
    }
    win(cache);
}

function moveDown() {
    let cache = parseInt(document.getElementById("cache").innerText);
    if (31 <= cache || cache <= 34) {
        document.getElementById(cache).src = document.getElementById(cache-10).src;
        document.getElementById(cache-10).src = "";
        
        document.getElementById("cache").innerText = cache - 10;
    }
    win(cache);
}

function moveUp() {
    let cache = parseInt(document.getElementById("cache").innerText);
    if (11 <= cache || cache <= 13) {
        document.getElementById(cache).src = document.getElementById(cache + 10).src;
        document.getElementById(cache + 10).src = "";
        cache += 10;
        document.getElementById("cache").innerText = cache;
    }
    win(cache);
}

function win(cache) {
    let win = true;
    let c = cache;
    for (let i = 1; i <= 3; i ++) {
        for (let j = 1; j <= 3; j ++) {
            var x = String(i) + String(j);
            
            if (document.getElementById(x).src != "http://127.0.0.1:5500/Week_2/Game/jfif/lv1/" + x + ".png") {  
                return document.getElementById("result").innerHTML = "";
            }
        }
    }

    document.getElementById("nextlv").innerHTML = "<a href='Game_Puzzle1.html'><button>Next Level</button></a>";
    return document.getElementById("result").innerHTML = "YOU WIN!!!";
}
