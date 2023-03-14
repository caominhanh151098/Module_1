document.getElementById("BMIbtn").addEventListener("click", BMI);

function BMI() {
    let w = parseFloat(document.getElementById("width").value);
    let h = parseFloat(document.getElementById("height").value);
    console.log(w);
    console.log(h);
    let BMI = w / (h * h);
    console.log(BMI);
    if (BMI < 18.5) {
        document.getElementById("result").innerText = BMI + ", Under Weight";
        document.getElementById("BMI_1").className = "fill";
    } else 
        if (BMI < 25) {
            document.getElementById("result").innerText = BMI + ", Normal";
            document.getElementById("BMI_2").className = "fill";
        } else
            if (BMI < 30) {
                document.getElementById("result").innerText = BMI + ", Over Weight";
                document.getElementById("BMI_3").className = "fill";
            } else {
                document.getElementById("result").innerText = BMI + ", Obese";
                document.getElementById("BMI_4").className = "fill";
            }
}