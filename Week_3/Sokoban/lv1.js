window.addEventListener("load", dataInput);
window.addEventListener("keydown", move);
let box = "http://127.0.0.1:5500/Week_3/Sokoban/img/box.png";
let wall = "http://127.0.0.1:5500/Week_3/Sokoban/img/wallBox.jpg"
let actionRight = "img/images.png";
let actionLeft = "img/images1.png";

function $(x) {
    return document.getElementById(x);
}
function dataInput() {
    let data = $("dataGame");

}

function move(event) {
    let key = event.keyCode;
    switch (key) {
        case 37:
            keyLeft();
            break;
        case 38:
            keyUp();
            break;
        case 39:
            keyRight();
            break;
        case 40:
            keyDown();
            break;
    }
}

function keyLeft() {
    let cache = +$("cache").innerText;
    if (cache == 22 || cache == 32 || cache == 42 || cache == 52 || cache == 62) {
        $(cache).src = actionLeft;
    }
    else
        if ($(cache - 1).src == box) {
            if (boxMove("left")) {
                $(cache - 2).src = box;
                $(cache - 1).src = actionLeft;
                $(cache).src = "";
                cache -= 1;
                $("cache").innerText = cache;
                $("count").value = +$("count").value + 1;
            }
        }
        else {
            $(cache - 1).src = actionLeft;
            $(cache).src = "";
            cache -= 1;
            $("cache").innerText = cache;
            $("count").value = +$("count").value + 1;
        }
    checkwin()
}
function keyUp() {
    let cache = +$("cache").innerText;
    if (cache > 27) {
        if ($(cache - 10).src == box) {
            if (boxMove("up")) {
                $(cache - 20).src = box;
                $(cache - 10).src = $(cache).src;
                $(cache).src = "";
                cache -= 10;
                $("cache").innerText = cache;
                $("count").value = +$("count").value + 1;
            }
        }
        else {
            $(cache - 10).src = $(cache).src;
            $(cache).src = "";
            cache -= 10;
            $("cache").innerText = cache;
            $("count").value = +$("count").value + 1;
        }
    }
    checkwin();
}
function keyRight() {
    let cache = +$("cache").innerText;
    if (cache == 26 || cache == 36 || cache == 46 || cache == 56 || cache == 66) {
        $(cache).src = actionRight;
    }
    else
        if ($(cache + 1).src == box) {
            if (boxMove("right")) {
                $(cache + 2).src = box;
                $(cache + 1).src = actionRight;
                $(cache).src = "";
                cache += 1;
                $("cache").innerText = cache;
                $("count").value = +$("count").value + 1;
            }
        }
        else {
            $(cache + 1).src = actionRight;
            $(cache).src = "";
            cache += 1;
            $("cache").innerText = cache;
            $("count").value = +$("count").value + 1;
        }
        checkwin();
}
function keyDown() {
    let cache = +$("cache").innerText;
    if ($(cache + 10).src == box) {
        boxMove("down");
    }
    if (cache < 57) {
        if ($(cache + 10).src == box) {
            if (boxMove("down")) {
                $(cache + 20).src = box;
                $(cache + 10).src = $(cache).src;
                $(cache).src = "";
                cache += 10;
                $("cache").innerText = cache;
                $("count").value = +$("count").value + 1;
            }
        }
        else {
            $(cache + 10).src = $(cache).src;
            $(cache).src = "";
            cache += 10;
            $("cache").innerText = cache;
            $("count").value = +$("count").value + 1;
        }
    }
    checkwin();
}

function boxMove(move) {
    let cache = +$("cache").innerText;
    switch (move) {
        case "left":
            if ($(cache - 2).src == wall || $(cache - 2).src == box) {
                return false;
            }
            else return true;

        case "up":
            if ($(cache - 20).src == wall || $(cache - 20).src == box) {
                return false;
            }
            else return true;
        case "right":
            if ($(cache + 2).src == wall || $(cache + 2).src == box) {
                return false;
            }
            else return true;
        case "down":
            if ($(cache + 20).src == wall || $(cache + 20).src == box) {
                return false;
            }
            else return true;
    }
}

function checkwin() {
    if ($("62").src == box && $("56").src == box) {
        $("result").innerHTML = "YOU WIN!!!";
        $("nextlv").innerHTML = "<a href='lv2.html'><button>Next Level</button></a>";
        return true;
    }
    else
        return false;
}