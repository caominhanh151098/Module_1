let C0223G2 = [
    {
        fullName: "Cao Minh Anh",
        dOB: "15-10-98",
        gender: true,
        email: "cao.minhanh@email",
        phone: 0363321231,
    },
    {
        fullName: "Đạt",
        dOB: "12-10-95",
        gender: true,
        email: "huy@email",
        phone: 0363321231,
    },
    {
        fullName: "Huy",
        dOB: "2-12-99",
        gender: true,
        email: "huy@email",
        phone: 0363321231,
    }
]
for(let i = 0; i < C0223G2.length; i++)
document.getElementById("data").innerHTML +=
    `
    <tr>
        <td>${i+1}</td>
        <td>${C0223G2[i].fullName}</td>
        <td>${C0223G2[i].dOB}</td>
        <td>${C0223G2[i].gender ? "Nam" : "Nữ"}</td>
        <td>${C0223G2[i].email}</td>
        <td>${C0223G2[i].phone}</td>
    </tr>
    `