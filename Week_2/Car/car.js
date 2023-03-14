function moveRight() {
    let obj = document.getElementById("car");
    obj.style.left = parseInt(obj.style.left) + 20 + 'px';
}
function moveLeft() {
    let obj = document.getElementById("car");
    obj.style.left = parseInt(obj.style.left) - 20 + 'px';
}
function moveTop() {
    let obj = document.getElementById("car");
    obj.style.top = parseInt(obj.style.top) - 20 + 'px';
}
function moveDown() {
    let obj = document.getElementById("car");
    obj.style.top = parseInt(obj.style.top) + 20 + 'px';
}

window.addEventListener("keydown", move);

function move(event) {
    let key = event.keyCode;
    console.log(key);
    switch (key) {
        case 37:
            document.getElementById("car").src = "carGoLeft.png";
            moveLeft();
            break;
        case 38:
            document.getElementById("car").src = "carGoUp.png";
            moveTop();
            break;
        case 39:
            document.getElementById("car").src = "carGoRight.png";
            moveRight();
            break;
        case 40:
            document.getElementById("car").src = "carGoDown.png";
            moveDown();
            break;
    }
}