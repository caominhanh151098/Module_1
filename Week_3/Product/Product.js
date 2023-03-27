let Products = ["Sony Xpreia", "Samsung Galaxy", "Nokia 6",
    "Xiaomi Redmi Note 4", "Apple IPhone 6S", "Xiaomi Mi 5s Plus",
    "Apple IPhone 8 Plus", "Fujitsu F-04E", "Oppo A71"]
window.addEventListener("load", showProduct);

document.getElementById("addbtn").addEventListener("click", addProduct);
document.getElementById("editBtn").addEventListener("click", editProduct);

function $(id) {
    return document.getElementById(id);
}

function editabc(index) {
    console.log(index);
}

function showProduct() {
    let text = "";
    Products.forEach(function (item, index) {
        text += `<tr id=${index}>`;
        text += `<td>${index}</td>`;
        text += `<td class="name">${item}</td>`;
        text += `<td><button onclick="edit(this.value)" value="${index}">Edit</button>
                <button onclick="deleteProduct(this.value)" value="${index}">Delete</button></td>`;
        text += "</tr>";
    });

    $("show").innerHTML = text;
}

function addProduct() {
    let Product = $("add_product").value;
    if (Product == "") 
        return null;
    Products.push(Product);
    alert(`Add: ${Product}`);
    showProduct();
}

function edit(id) {
    let Product = $(id).querySelectorAll("td")[1].innerText;
    $("edit_product").value = Product;
    $("id_Edit").value = id;
}

function editProduct() {
    let editNewProduct = $("edit_product").value;
    let Id = $("id_Edit").value;
    Products[Id] = editNewProduct;
    showProduct();
    // document.getElementsByClassName("name")[Id].innerText = editNewProduct;
}

function deleteProduct(id) {
    let Product = $(id).querySelectorAll("td")[1].innerText;
    confirm(`Want to delete ${Product}?`) ? 
        (deleteInData(Product), $("edit_product").value = "", $("id_Edit").value = "") : 0;
}

function deleteInData(name) {
    Products.forEach(function (item, index) {
        if (item == name)    
            Products.splice(index, 1);
    });
    showProduct();
}