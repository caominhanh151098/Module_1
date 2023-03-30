let srcLeft = "png/carGoLeft(1).png";
let srcUp = "png/carGoUp(1).png";
let srcRight = "png/carGoRight(1).png";
let srcDown = "png/carGoDown(1).png";
let img = $("car");
let obj = $("trash");
let coin_Icon = $("coin");
let width_Screen = $("game").width;
let height_Screen = $("game").height;
let ctx = $("game").getContext("2d");
let ctx_1 = $("game").getContext("2d");
let ctx_2 = $("game").getContext("2d");
let myInterval
let speed = 0;
let point = 0;

window.onload = function () {
    show(50, 25);
};

let car = function () {
    this.default_x = 500;
    this.default_y = 500;
    this.default_speed;

    this.hit_box = {
        left: this.default_x,
        right: this.default_x + 50,
        top: this.default_y,
        bottom: this.default_y + 100,
    };

    this.move = function (event) {
        speed = event.ctrlKey ? 8 : 5;
        switch (event.keyCode) {
            case 37:
                img.src = srcLeft;
                clearInterval(myInterval);
                myInterval = setInterval(moveLeft, 17);
                break;
            case 38:
                img.src = srcUp;
                clearInterval(myInterval);
                myInterval = setInterval(moveUp, 17);
                break;

            case 39:
                img.src = srcRight;
                clearInterval(myInterval);
                myInterval = setInterval(moveRight, 17);
                break;
            case 40:
                img.src = srcDown;
                clearInterval(myInterval);
                myInterval = setInterval(moveDown, 17);
                break;
        }
    }

}
let object = function () {
    this.x = Math.floor(Math.random() * (width_Screen));
    this.y = Math.floor(Math.random() * (height_Screen - 50));

    this.hitbox = {
        myLeft: this.x,
        myRight: this.x + 30,
        myTop: this.y,
        myBottom: this.y + 30,
    };
}

function $(x) {
    return document.getElementById(x);
}



let showCar = new car();
let trash = [new object(), new object(), new object(), new object(), new object(), new object(), new object(), new object(), new object()];
let coin = new object();
window.addEventListener("keydown", showCar.move);
window.addEventListener("keyup", showCar.move);

function show(x, y) {
    ctx.drawImage(img, showCar.default_x + x, showCar.default_y + y);
    ctx_2.drawImage(coin_Icon, coin.x, coin.y);
    trash.forEach(function (item, index) {
        ctx_1.drawImage(obj, trash[index].x, trash[index].y);
    })
}

function moveUp() {

    showCar.default_y -= speed;
    showCar.hit_box.left = showCar.default_x + 50;
    showCar.hit_box.right = showCar.default_x + 100;
    showCar.hit_box.top = showCar.default_y + 25;
    showCar.hit_box.bottom = showCar.default_y + 125;
    ctx.reset();
    show(50, 25);
    gameLose();
    getCoin();
}
function moveLeft() {
    showCar.default_x -= speed;
    showCar.hit_box.left = showCar.default_x + 25;
    showCar.hit_box.right = showCar.default_x + 125;
    showCar.hit_box.top = showCar.default_y + 50;
    showCar.hit_box.bottom = showCar.default_y + 100;
    ctx.reset();
    show(25, 50);
    gameLose();
    getCoin();
}
function moveRight() {
    showCar.default_x += speed;
    showCar.hit_box.left = showCar.default_x + 25;
    showCar.hit_box.right = showCar.default_x + 125;
    showCar.hit_box.top = showCar.default_y + 50;
    showCar.hit_box.bottom = showCar.default_y + 100;
    ctx.reset();
    show(25, 50);
    gameLose();
    getCoin();
}
function moveDown() {
    showCar.default_y += speed;
    showCar.hit_box.left = showCar.default_x + 50;
    showCar.hit_box.right = showCar.default_x + 100;
    showCar.hit_box.top = showCar.default_y + 25;
    showCar.hit_box.bottom = showCar.default_y + 125;
    ctx.reset();
    show(50, 25);
    gameLose();
    getCoin();
}

function gameLose() {
    for (let item of trash) {
        let hit_trash = (showCar.hit_box.right >= item.hitbox.myLeft && showCar.hit_box.left <= item.hitbox.myRight &&
            showCar.hit_box.bottom >= item.hitbox.myTop && showCar.hit_box.top <= item.hitbox.myBottom)
        let hit_screen = (showCar.hit_box.left <= 0 || showCar.hit_box.right >= width_Screen ||
            showCar.hit_box.top <= 0 || showCar.hit_box.bottom >= height_Screen)
        if (hit_screen || hit_trash) {
            clearInterval(myInterval);
            window.removeEventListener("keydown", showCar.move);
            window.removeEventListener("keyup", showCar.move);
            tryBtn = () => $("trybtn").style = "";
            setTimeout(tryBtn, 2000);
            return $("result").innerText = "You Lose!";
            
        }
    }
}

function getCoin() {
    if (showCar.hit_box.right >= coin.hitbox.myLeft && showCar.hit_box.left <= coin.hitbox.myRight &&
        showCar.hit_box.bottom >= coin.hitbox.myTop && showCar.hit_box.top <= coin.hitbox.myBottom) {
            point += speed > 5 ? 2 : 1;
        coin = new object();
        ctx_2.drawImage(coin_Icon, coin.x, coin.y);
        $("point").innerText = point;
    }
}