
    let a = 0;
    let b = 1;
    let c = -2;
    console.log(a + "x^2 + " + b + "x + " + c + "= 0");
    if (a != 0) {
        let delta = b*b - 4*a*c;
        if (delta < 0) {
            return console.log("Phuong trinh vo nghiem");
        } else if (delta == 0) {
            let result = -(b/2*a); 
            return console.log("Phuong trinh co nghiem kep x1 = x2 =" + result);
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2*a);
            let x2 = (-b - Math.sqrt(delta)) / (2*a);
           console.log("Phuong trinh co nghiem:");
           console.log("x1 =" + x1);
           console.log("x2 =" + x2);
       }
    } else {
        let x = -c/b;
        console.log("Phuong trinh co nghiem:");
        console.log("x =" + x);
    }
