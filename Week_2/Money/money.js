function makemoney(){
    let fcur = document.getElementById('fcur').value;
    let tcur = document.getElementById('tcur').value;

    let money = parseInt(document.getElementById('money').value);
    let convert;
    switch (fcur) {
        case 'VND': 
            convert = money / 23570;
            break;
        case 'USD':
            convert = money / 1;
            break;
        case 'EUR':
            convert = money / 0.93;
            break;
        case 'JPY':
            convert = money / 134.68;
            console.log(convert);
            break;
    }
    switch (tcur) {
        case 'VND': 
            result = convert * 23570;
            break;
        case 'USD':
            result = convert * 1;
            break;
        case 'EUR':
            result = convert * 0.93;
            console.log(result);
            break;
        case 'JPY':
            result = convert * 134.68;
            break;
    }

    document.getElementById('result').innerHTML = 'Result = ' + result + tcur;
}