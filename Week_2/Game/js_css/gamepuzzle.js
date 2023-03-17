window.addEventListener("load", random)

document.getElementById("1").addEventListener("click", (item) => {
    switchIMG(item.target.id);
})
document.getElementById("2").addEventListener("click", (item) => {
    switchIMG(item.target.id);
})
document.getElementById("3").addEventListener("click", (item) => {
    switchIMG(item.target.id);
})
document.getElementById("4").addEventListener("click", (item) => {
    switchIMG(item.target.id);
})
document.getElementById("5").addEventListener("click", (item) => {
    switchIMG(item.target.id);
})

function random() {
    let list = document.querySelectorAll("img");
    list.forEach((item) => {
        let random = Math.ceil(Math.random() * 5);
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
        document.getElementById(item.id).src = srcimg;
    })
}

function switchIMG(item) {
    let srcIMG = document.getElementById(item).src;
    let src = "";
    do {
    let random = Math.ceil(Math.random() * 5);
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
    src = `http://127.0.0.1:5500/Week_2/Game/Puzzle/${animal}/img-${item}.png`;
    } while (src == srcIMG);
 
    document.getElementById(item).src = src;
    
    win();

}

function win() {
    if (checkwin()) {
        document.getElementById("div").className = "win";
        document.getElementById("result").innerText = "YOU WIN!";
        document.getElementById("bgrwin").className = "win";
    }
    else {
        document.getElementById("div").className = "";
        document.getElementById("result").innerText = "";
        document.getElementById("bgrwin").className = "";
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