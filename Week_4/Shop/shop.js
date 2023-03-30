class Laptop {
    constructor(name, img, hashtag_1, hashtag_2, price, discount, screen, cpu, ram, hard_drive, card, weight) {
        this.name = name;
        this.img = img;
        this.hashtag = [hashtag_1, hashtag_2];
        this.price = price;
        this.discount = discount;
        this.screen = screen;
        this.cpu = cpu;
        this.ram = ram;
        this.hard_drive = hard_drive;
        this.card = card;
        this.weight = weight;
        this.promo = ["Tặng 500K mua robot hút bụi/máy lọc nước", "Giảm 3% tối đa 250.000đ qua Grab Moca", "Giảm ngay 600.000đ khi mở thẻ TPBANK EVO", "Giảm ngay 5% tối đa 500.000Đ qua Kredivo"];
    }
}

let laptops = [
    new Laptop("Asus TUF Gaming FX506LHB-HN188W i5 10300H",
        "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/26/637787904727727554_asus-tuf-gaming-fx506lh-den-2022-dd.jpg",
        "Trả góp", 3500000, 17490000, 20990000, 15.6, "Core i5", "8 GB (1 thanh 8 GB)", "SSD 512 GB", "NVIDIA GeForce GTX 1650 4GB", 2.3),
    new Laptop("MSI Gaming GF63 Thin 11SC-1090VN i5 11400H",
        "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/7/638007352801976726_msi-gaming-gf63-thin-11sc-1090vn-den-dd.jpg",
        "Trả góp", 2500000, 16490000, 18990000, 15.6, "Core i5", "8 GB (1 thanh 8 GB)", "SSD 512 GB", "NVIDIA GeForce GTX 1650 4GB", 1.86,),
    new Laptop("Lenovo Gaming IdeaPad 3 15IAH7 i5 12500H/82S900H2VN",
        "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/26/637971149907512230_lenovo-ideapad-gaming-3-15iah7-xam-dd.jpg",
        "Trả góp", 4500000, 22790000, 27290000, 15.6, "Core i5", "16 GB (2 thanh 8 GB)", "SSD 512 GB", "NVIDIA GeForce GTX 3050 4GB", 2.25),
    new Laptop("MSI GF63 Thin 11UC 444VN i5 11400H",
        "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/26/637788084553132269_msi-gf63-thin-den-dd.jpg",
        "Trả góp", 5000000, 17490000, 22490000, 15.6, "Core i5", "16 GB (2 thanh 8 GB)", "SSD 512 GB", "NVIDIA GeForce GTX 3050 4GB", 1.86)
];

console.log(document.getElementsByClassName("promo"));

function formatVND(x) {
    return x.toLocaleString('vi', { style: 'currency', currency: 'VND'});
}

for (let item of laptops) {
    document.getElementById("main").innerHTML +=
        `
        <div class="product">
            <div class="img">
                <img
                    src="${item.img}">
                <div class="hashtag">
                    <span class="installment">${item.hashtag[0]}</span>

                    <span class="reduce">Giảm ${formatVND(item.hashtag[1])}</span>
                </div>
            </div>
            <div class="name_product">
                <h3>${item.name}</h3>
            </div>
            <div class="price">
                <div class="price_sale">${formatVND(item.price)}
                </div>
                <span class="discount"><strike>${formatVND(item.discount)}</strike></span>
            </div>
            <div class="product_config">
                <div class="infomation">
                    <span class="screen_info"><img src="screen.PNG">${item.screen}</span>
                    <span class="cpu_info"><img src="cpu.PNG">${item.cpu}</span>
                    <span><img src="ram.PNG">${item.ram}</span>
                    <span><img src="ssd.PNG">${item.hard_drive}</span>
                    <span><img src="card.PNG">${item.card}</span>
                    <span><img src="weight.PNG">${item.weight}</span>
                </div>
                <div class="img_promo">
                    <span class="active"><img
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/13/638143263918283970_PMH-02-01.jpg"></span>
                    <span class=""><img
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/1/638002152487434133_637426739557050119_logo-moca.png"></span>
                    <span class=""><img
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/5/637847745475943329_637846629514363952_ic-tp-bank.jpg"></span>
                    <span class=""><img
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"></span>
                    <div class="promo_text">Giảm ngay 5% tối đa 500.000Đ qua Kredivo</div>
                </div>
            </div>
        </div>
        `
}


