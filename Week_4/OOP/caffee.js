class Caffe {
    constructor(photo, name, price, category) {
        this.photo = photo;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

let caffes = [
    new Caffe("https://capherangxay.vn/wp-content/uploads/2018/07/1C6A6754-scaled-247x296.jpg",
        "Cà phê nguyên chất Hạt CULI (đặc biệt)",
        169000,
        "Sản phẩm nguyên chất"),
    new Caffe("https://capherangxay.vn/wp-content/uploads/2018/07/1C6A6767-scaled-247x296.jpg",
        "Cà phê nguyên chất Hạt ESPRESSO BLEND 1 (Đậm gu – cà phê pha máy)",
        219000,
        "Sản phẩm nguyên chất"),
    new Caffe("https://capherangxay.vn/wp-content/uploads/2018/07/1C6A6786-scaled-247x296.jpg",
        "Cà phê nguyên chất Hạt ESPRESSO BLEND 2 (Đậm chất – cà phê pha máy)",
        279000,
        "Sản phẩm nguyên chất"),
    new Caffe("https://capherangxay.vn/wp-content/uploads/2018/07/1C6A6750-scaled-247x296.jpg",
        "Cà phê nguyên chất Hạt GU 1 (Đậm đà)",
        159000,
        "Sản phẩm nguyên chất"),
    new Caffe("https://capherangxay.vn/wp-content/uploads/2018/07/1C6A6742-scaled-247x296.jpg",
        "Cà phê nguyên chất Hạt GU 2 (Mạnh mẽ)",
        169000,
        "Sản phẩm nguyên chất"),
    new Caffe("https://capherangxay.vn/wp-content/uploads/2018/07/1C6A6763-scaled-247x296.jpg",
        "Cà phê nguyên chất Hạt Hảo Hạng 1 (Đam mê)",
        179000,
        "Sản phẩm nguyên chất hảo hạng")
];

console.log(caffes);