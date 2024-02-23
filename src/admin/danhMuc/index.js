import navigation from "../../components/nav";
import { router, useEffect, useState } from "../../libs";

const productAdmin = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/danhMucVe")
        .then((response) => response.json())
        .then((data) => setProduct(data))
    },[])

    useEffect(() => {
        const btn = document.querySelectorAll(".btn-delete");
        for (const i of btn) {
            i.addEventListener("click", () => {
            let id = i.dataset.id;
            if(confirm("Bạn có muốn xóa không ?")){
            fetch("http://localhost:3000/danhMucVe/"+id , {
                method : "DELETE",
                headers : {
                "content-Type" : "application/json"
                }

            }).then(() => {
                router.navigate("/admin/product/");
                alert("Xóa Thành Công ^^")
                });
            }
        })
        }
    })
    return `
    ${navigation()}
    <div class="container my-5">
        <h2 class="text-center fw-bold my-5">Danh sách chuyến bay</h2>
        <a href="/admin/product/create" class="btn btn-secondary mb-4">Thêm Chuyến Bay</a>
        <table class="table table-hover">
            <tr class="bg-dark text-light">
                
                <th>ID</th>
                <th>LOẠI VÉ</th>
                <th>MÔ TẢ</th>
                <th>THAO TÁC</th>
            </tr>
            ${product.reverse().map(e => 
                `<tr>
                    <td>${e.id}</td>
                    <td>${e.loaiVe}</td>
                    <td>${e.moTa}</td>
                    <td>
                        <a href="/admin/product/update/${e.id}" class="btn btn-secondary"><i class="fa-solid fa-pen-to-square"></i></a>
                        <button data-id="${e.id}"  class="btn btn-dark btn-delete"><i class="fa-solid fa-delete-left"></i></button>
                    </td>
                </tr>
            `).join("")}
        </table>
    </div>
    `;
}
export default productAdmin;