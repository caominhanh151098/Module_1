let myDate = function (date, month, year) {
    this.date = date;
    this.month = month;
    this.year = year;

    this.getDate = function () {
        return this.date;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }

    this.setDay = function (date) {
        this.date = date;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
        this.year = year;
    }

    this.setDate = function (date, month, year) {
        this.date = date;
        this.month = month;
        this.year = year;
    }

    this.toString = function () {
        return `${this.date}/${this.month}/${this.year}`;
    }
}


let date = new myDate(23,02,2023);

date.setDay(20);
date.setMonth(12);
date.setYear(2020);

let day = date.getDate();
let month = date.getMonth();
let year = date.getYear();
date.setDate(15,10,1998);

console.log(date.toString());
// console.log(`${day}/${month}/${year}`);

