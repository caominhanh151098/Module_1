let laptops = [
    {
        name: "Asus TUF Gaming FX506LHB-HN188W i5 10300H",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/26/637787904727727554_asus-tuf-gaming-fx506lh-den-2022-dd.jpg",
        price: 17490000,
        discount: 3500000,
        screen: 15.6,
        cpu: "Core i5",
        ram: "8 GB (1 thanh 8 GB)",
        hard_drive: "SSD 512 GB",
        card: "NVIDIA GeForce GTX 1650 4GB",
        weight: 2.3,
    },
    {
        name: "MSI Gaming GF63 Thin 11SC-1090VN i5 11400H",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/7/638007352801976726_msi-gaming-gf63-thin-11sc-1090vn-den-dd.jpg",
        price: 16490000,
        discount: 2500000,
        screen: 15.6,
        cpu: "Core i5",
        ram: "8 GB (1 thanh 8 GB)",
        hard_drive: "SSD 512 GB",
        card: "NVIDIA GeForce GTX 1650 4GB",
        weight: 1.86,
    },
    {
        name: "Lenovo Gaming IdeaPad 3 15IAH7 i5 12500H/82S900H2VN",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/26/637971149907512230_lenovo-ideapad-gaming-3-15iah7-xam-dd.jpg",
        price: 22790000,
        discount: 4500000,
        screen: 15.6,
        cpu: "Core i5",
        ram: "16 GB (2 thanh 8 GB)",
        hard_drive: "SSD 512 GB",
        card: "NVIDIA GeForce GTX 3050 4GB",
        weight: 2.25,
    },
    {
        name: "MSI GF63 Thin 11UC 444VN i5 11400H",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/26/637788084553132269_msi-gf63-thin-den-dd.jpg",
        price: 17490000,
        discount: 5000000,
        screen: 15.6,
        cpu: "Core i5",
        ram: "16 GB (2 thanh 8 GB)",
        hard_drive: "SSD 512 GB",
        card: "NVIDIA GeForce GTX 3050 4GB",
        weight: 1.86,
    }
]
laptops.forEach(function (item, index) {
    document.getElementById("data").innerHTML +=
    `
        <tr>
            <td>${index}</td>
            <td>${laptops[index].name}</td>
            <td><img src="${laptops[index].img}"></td>
            <td>${laptops[index].price} đ</td>
            <td>Giảm ${laptops[index].discount} đ</td>
            <td>${laptops[index].screen} inch</td>
            <td>${laptops[index].cpu}</td>
            <td>${laptops[index].ram}</td>
            <td>${laptops[index].hard_drive}</td>
            <td>${laptops[index].card}</td>
            <td>${laptops[index].weight} kg</td>
        </tr>
    `;
});