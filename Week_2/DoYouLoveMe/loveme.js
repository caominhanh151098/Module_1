document.getElementById("yesbtn").addEventListener("click", answer)
document.getElementById("nobtn").addEventListener("mouseover", isjoke)

function answer() {
    alert("OMG!! Me too!");
}

function isjoke() {
    let obj = document.getElementById("nobtn");
    let a = window.innerWidth;
    console.log(a);
    let b = window.innerHeight; 
    console.log(b);

    let x = Math.random() * a;
    console.log(x);
    let y = Math.random() * b;
    console.log(y);

    obj.style.left = x + "px";
    obj.style.top = y + "px";
    
}

