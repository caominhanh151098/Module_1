let Temperature = function (c) {
    this.c = c;

    this.toF = function () {
        return (9 * this.c) / 5 + 32;
    }
    this.toK = function () {
        return this.c + 273, 15;
    }

}

let temperature = new Temperature(25);

console.log(temperature.toF());
console.log(temperature.toK());
