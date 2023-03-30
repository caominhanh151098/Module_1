let laptops = {
    name: "Lenovo IdeaPad 3 15IAU7 82RK005LVNax",
    image: "https://philong.com.vn/media/product/250-29599-lenovo--ideapad3-15iau7-philong2.png",
    discount: -0.21,
    price: 13990000,
    priceSale: `${this.price} + (${this.price} * ${this.discount})`,
    depcription: "Laptop Lenovo IdeaPad 3 15IAU7 82RK005LVN (Intel Core i3-1215U, RAM 8GB, SSD 256GB, VGA Intel UHD, Màn Hình 15.6 inch FHD, Windows 11, Màu Xám)",
    promotion: ["Túi sách đựng balo", "Chuột không dây"],
    hashtags: ["Khuyến mãi", "Bán chạy"]
}

console.log(lenovo.priceSale);

for (let i = 0; i < laptops.length; i++) {
    document.getElementById("product_area").innerHTML =
        `
        <div class="product_area">
            <span id="discound">${lenovo.discount}</span>
            <img src="${lenovo.image}">
            <h3 id="name">${lenovo.name}</h3>
            <div>
                <span id="hashtag">${lenovo.hashtags[0]}</span>
                <span id="hashtag">${lenovo.hashtags[1]}</span>
            </div>
            <h3>Laptop Lenovo IdeaPad 3 15IAU7 82RK005LVN</h3>
            <p>${lenovo.hashtags.length} Khuyến mãi</p>
        </div>
        `;
};