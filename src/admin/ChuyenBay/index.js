import navigation from "../../components/nav";
import { router, useEffect, useState } from "../../libs";

const flightAdmin = () => {
    const [flight , setFlight] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/Ve")
        .then((response) => response.json())
        .then((data) => setFlight(data));
    },[]);
    
    useEffect(() => {
            const btnDelete = document.querySelectorAll('.btn-dark');
            console.log(btnDelete);
            for (let btn of btnDelete) {
                    btn.addEventListener('click', () =>{
                    let id = btn.dataset.id;
                    console.log('click');
                if(confirm("Bạn có muốn xóa không ?")){
                    fetch(`http://localhost:3000/Ve/${id}`, {
                        method : "DELETE",
                        headers : {
                            "content-Type" : "application/json"
                        }
                    }).then(() => { 
                        router.navigate("/admin/flight");
                        alert("Xóa Thành Công^^")
                        })
                }
                })
            }
    })

    return `
    ${navigation()}
    <div class="container my-5">
        <h2 class="text-center fw-bold my-5">Danh sách chuyến bay</h2>
        <a href="/admin/flight/create" class="btn btn-secondary mb-4">Thêm Chuyến Bay</a>
    <table class="table table-hover ">
        <tr class="bg-dark text-light">
            <th>ID</th>
            <th>CHUYẾN BAY</th>
            <th>ẢNH</th>
            <th>NƠI ĐI</th>
            <th>NƠI ĐẾN</th>
            <th>THAO TÁC</th>
        </tr>
        
    
        ${flight.reverse().map(e =>
            `<tr>
                <td>${e.id}</td>
                <td>${e.chuyenBay}</td>
                <td>${e.time}</td>
                <td>${e.noidi}</td>
                <td>${e.noiden}</td>
                <td>
                <a href="/admin/flight/update/${e.id}" type="button" class="btn btn-secondary"><i class="fa-solid fa-pen-to-square"></i></a>
                <button data-id="${e.id}" class="btn btn-dark"><i class="fa-solid fa-delete-left"></i></button>
                </td>
            </tr>`
         ).join("")}
    </table>
    </div>`;
}
export default flightAdmin;