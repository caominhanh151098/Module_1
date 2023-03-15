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
    if (cache != 11 || cache != 21 || cache != 31 || cache != 41 || cache != 51 || cache != 61) {
        document.getElementById(cache).src = document.getElementById(cache-1).src;
        document.getElementById(cache-1).src = "";
        cache -= 1;
        document.getElementById("cache").innerText = cache;
    }
    win(cache);
}

function moveLeft() {
    let cache = parseInt(document.getElementById("cache").innerText);
    if (cache != 16 || cache != 26 || cache != 36 || cache != 46 || cache != 56 || cache != 67) {
        document.getElementById(cache).src = document.getElementById(cache+1).src;
        document.getElementById(cache+1).src = "";
        cache += 1;
        document.getElementById("cache").innerText = cache;
    }
    win(cache);
}

function moveDown() {
    let cache = parseInt(document.getElementById("cache").innerText);
    if (61 <= cache || cache <= 67) {
        document.getElementById(cache).src = document.getElementById(cache-10).src;
        document.getElementById(cache-10).src = "";
        
        document.getElementById("cache").innerText = cache - 10;
    }
    win(cache);
}

function moveUp() {
    let cache = parseInt(document.getElementById("cache").innerText);
    if (11 <= cache || cache <= 16) {
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
    for (let i = 1; i <= 6; i ++) {
        for (let j = 1; j <= 6; j ++) {
            var x = String(i) + String(j);
            
            if (document.getElementById(x).src != "http://127.0.0.1:5500/Week_2/Game/jfif/lv2/img-" + x + ".jfif") {  
                return document.getElementById("result").innerHTML = "";
            }
        }
    }

    document.getElementById("nextlv").innerHTML = "<a href='Game_Puzzle.html'><button>Next Level</button></a>";
    return document.getElementById("result").innerHTML = "YOU WIN!!!";
}
