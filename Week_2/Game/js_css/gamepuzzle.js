window.addEventListener("load", random)

document.getElementById("1").addEventListener("click", (item) => {
    switchIMG(item.target.id);
});
document.getElementById("2").addEventListener("click", (item) => {
    switchIMG(item.target.id);
});
document.getElementById("3").addEventListener("click", (item) => {
    switchIMG(item.target.id);
});
document.getElementById("4").addEventListener("click", (item) => {
    switchIMG(item.target.id);
});
document.getElementById("5").addEventListener("click", (item) => {
    switchIMG(item.target.id);
});

function random() {
    let list = document.querySelectorAll("img");
    list.forEach((item) => {
        let random = Math.floor(Math.random() * 5 + 1);
        let animal = "";
        switch (random) {
        case 1:
            animal = "bear";
            break;
        case 2:
            animal = "cat";
            break;
        case 3:
            animal = "dog";
            break;
        case 4:
            animal = "monkey";
            break;
        case 5:
            animal = "procyonid";
            break;
        }
        //console.log(item.src);
        let srcimg = `Puzzle/${animal}/img-${item.id}.png`;
        console.log(srcimg);
        document.getElementById(item.id).src = srcimg;
    })
}

function switchIMG(item) {
    document.getElementById(item);
    let random = Math.floor(Math.random() * 5 + 1);
    let animal = "";
    switch (random) {
        case 1:
            animal = "bear";
            break;
        case 2:
            animal = "cat";
            break;
        case 3:
            animal = "dog";
            break;
        case 4:
            animal = "monkey";
            break;
        case 5:
            animal = "procyonid";
            break;
    }
    let src = `Puzzle/${animal}/img-${item}.png`;
    document.getElementById(item).src = src;
    
    win();

}

function win() {
    if (checkwin()) {
        document.getElementById("div").className = "win";
        document.getElementById("result").innerText = "YOU WIN!";
    }
    else {
        document.getElementById("div").className = "";
        document.getElementById("result").innerText = "";
    }
}

function checkwin() {
    let list = document.querySelectorAll("img")
    let win;
    let array = new Array();
    list.forEach((item, index) => {
        let string = item.src;
        let link = string.slice(0,string.indexOf("img"));
        array[index] = link;
    });
    (array[0] != array[1]) ? win = false :
        array[0] != array[2] ? win = false :
            array[0] != array[3] ? win = false :
                array[0] != array[4] ? win = false : win = true;

    return win;
}