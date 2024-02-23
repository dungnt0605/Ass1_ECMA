import navigation from "../../components/nav";
import { router, useEffect, useState } from "../../libs";

const bookingAdmin = () => {
    const [booking , setbooking] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/datVe")
        .then((response) => response.json())
        .then((data) => setbooking(data));
    },[]);
    
    useEffect(() => {
            const btnDelete = document.querySelectorAll('.btn-dark');
            console.log(btnDelete);
            for (let btn of btnDelete) {
                    btn.addEventListener('click', () =>{
                    let id = btn.dataset.id;
                    let com = confirm("Bạn có muốn xóa không ?");
                    if(com){
                        fetch(`http://localhost:3000/datVe/${id}`, {
                            method : "DELETE",
                            headers : {
                                "content-Type" : "application/json"
                            }
                        }).then(() => {
                            router.navigate("/admin/booking");
                            alert("Xóa Thành Công ^^")
                            })
                        }
                    })
                    
            }
    })

    return `
    ${navigation()}
    <div class="container my-5">
        <h2 class="text-center fw-bold my-5">Danh sách Thông tin đặt vé</h2>
        <table class="table table-hover ">
            <tr class="bg-dark text-light">
                <th>ID</th>
                <th>TÊN KHÁCH</th>
                <th>THẺ CĂN CƯỚC</th>
                <th>EMAIL</th>
                <th>SĐT</th>
                <th>CHUYẾN BAY</th>
                <th>NƠI ĐI</th>
                <th>NƠI ĐẾN</th>
                <th>NGÀY ĐI</th>
                <th>LOẠI VÉ</th>
                <th>HÀNH LÝ</th>
                <th>THANH TOÁN</th>
                <th>TRẠNG THÁI</th>
                <th>THAO TÁC</th>
            </tr>
            
        
            ${booking.reverse().map(e =>
                `<tr>
                    <td>${e.id}</td>
                    <td>${e.name}</td>
                    <td>${e.idGuest}</td>
                    <td>${e.email}</td>
                    <td>${e.sdt}</td>
                    <td>${e.flight}</td>
                    <td>${e.from_order}</td>
                    <td>${e.to_order}</td>
                    <td>${e.date_order}</td>
                    <td>${e.hangVe}</td>
                    <td>${e.box}</td>
                    <td>${e.pay==="on" ? "Thanh toán Online" : "Thanh toán tiền mặt"}</td>
                    <td>${e.role == 0 ? `Chưa thanh toán` : `Đã thanh toán` }</td>
                    <td>
                    <a href="/admin/booking/update/${e.id}"  class="btn btn-secondary"><i class="fa-solid fa-pen-to-square"></i></a>
                    <button data-id="${e.id}" class="btn btn-dark"><i class="fa-solid fa-delete-left"></i></button>
                    </td>
                </tr>`
            ).join("")}
        </table>
       

    </div>`; 
}
export default bookingAdmin;