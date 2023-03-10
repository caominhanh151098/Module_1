// function MoveUp() {
//         document.getElementById('car').src = 'carGoUp.png';
// }
// function MoveLeft() {
//         document.getElementById('car').src = 'carGoLeft.png';
// }
// function MoveRight() {
//         document.getElementById('car').src = 'carGoRight.png';
// }
// function MoveDown() {
//         document.getElementById('car').src = 'carGoDown.png';
// }

// addEventListener("keydown", function (event) {
//     if (event.which == 37) {
//         document.getElementById('car').src = 'carGoLeft.png';
//         console.log(event.which);
//     } else if (event.which == 38) {
//         document.getElementById('car').src = 'carGoUp.png';
//         console.log(event.which);
//     } else if (event.which == 39) {
//         document.getElementById('car').src = 'carGoRight.png';
//         console.log(event.which);
//     } else if (event.which == 40) {
//         document.getElementById('car').src = 'carGoDown.png';
//         console.log(event.which);
//     }
// });

function move(event) {
    let value = event.which;
    console.log(value);
    switch (value) {
        case 37: document.getElementById('car').src = 'carGoLeft.png'; break;
        case 38: document.getElementById('car').src = 'carGoUp.png'; break;
        case 39: document.getElementById('car').src = 'carGoRight.png'; break;
        case 40: document.getElementById('car').src = 'carGoDown.png'; break;
    }
}
