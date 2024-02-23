import { router, useEffect, useState } from "../../libs/index.js";


const updateBookingAdmin = (id) => {

    const [postVe , setPostVe] = useState([]) ;
    useEffect(() => {
        fetch("http://localhost:3000/Ve")
        .then(response => response.json())
        .then((data) => setPostVe(data))

    },[]);
    const [postDM , setPostDM] = useState([]) ;
    useEffect(() => {
        fetch("http://localhost:3000/danhMucVe")
        .then(response => response.json())
        .then((data) => setPostDM(data))

    },[]);

    const [b , setBooking] = useState([]) ;
    useEffect(() => {
        fetch("http://localhost:3000/datVe/"+id)
        .then((response)=> response.json())
        .then ((data) =>setBooking(data));
    },[])
    console.log(b);

    useEffect(() => {
        const name = document.getElementById("name");
        const idGuest = document.getElementById("idGuest");
        const email = document.getElementById("email");
        const sdt = document.getElementById("sdt");
        const flight_a = document.getElementById("flight_a");
        const from_order = document.getElementById("from_order");
        const to_order = document.getElementById("to_order");
        const date_order = document.getElementById("date_order");
        const hangVe = document.getElementById("hangVe");
        const box = document.getElementById("box");
        const pay = document.getElementById("pay");
        const role = document.getElementById("role");

        const order_form = document.querySelector("#order_form");
        order_form.addEventListener("submit" , (e) => {
            e.preventDefault();
            let newOrder = {
                "name" : name.value,
                "idGuest" : idGuest.value,
                "email" : email.value,
                "sdt" : sdt.value ,
                "flight" : flight_a.value,
                "from_order" : from_order.value,
                "to_order" : to_order.value,
                "date_order" : date_order.value,
                "hangVe" : hangVe.value,
                "box" : box.value ,
                "pay" : pay.value ,
                "role" : role.value
            };
            console.log(newOrder);
            fetch("http://localhost:3000/datVe/"+id, {
                method : "PUT",
                headers : {
                    "content-Type" : "application/json"
                },
                body : JSON.stringify(newOrder)
            }).then(() => router.navigate("/admin/booking"));
        })
    })
    return /*html*/`
    <div id="create_admin" class="pt-5">
            <form action="" class="w-50 rounded-5 m-auto" id="order_form" style="background-color: rgba(0, 0, 0, 0.6) ; color:#fff;">
                <h3 class="text-center my-3 fw-bold">Cập Nhật máy bay</h3>
                <div class="row  " id="bookingUpdate">
                    <div class="col-sm-6">
                        <div class="card">
                            <h4>Họ và tên :</h4>
                            <input class="border border-light text-light" type="text" id="name" value="${b.name}">

                            <h4>Số Căn cước :</h4>
                            <input class="border border-light text-light" type="text" id="idGuest" value="${b.idGuest}">

                            <h4>Email :</h4>
                            <input class="border border-light text-light" type="email" id="email" value="${b.email}">
                            
                            <h4>Chọn chuyến bay :</h4>
                            <select class="border border-light text-light" name="flight_a" id="flight_a">
                            ${postVe.map((e) => {
                                return`
                                <option value="${e.id}" ${b.flight === e.id ? "selected" : ''}>${e.chuyenBay}</option>`;
                            })}
                            </select>
                            
                            <h4>SĐT :</h4>
                            <input class="border border-light text-light" type="text" id="sdt" value="${b.sdt}">
                            
                            <h4>Trạng thái :</h4>
                            <select class="border border-light text-light" name="role" id="role">
                                <option value="0" ${b.role == 0 ? "selected" : ""}>Chưa thanh toán</option>
                                <option value="1" ${b.role == 0 ? "" : "selected"}>Đã thanh toán</option>
                            </select>
                        </div>
                        
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <h4>Nơi khởi hành :</h4>
                            <input class="border border-light text-light" type="text" id="from_order" value="${b.from_order}">

                            <h4>Nơi đến :</h4>
                            <input class="border border-light text-light" type="text" id="to_order" value="${b.to_order}">

                            <h4>Ngày khởi hành :</h4>
                            <input class="border border-light text-light" type="date" id="date_order" value="${b.date_order}">

                            <h4>Hạng vé :</h4>
                            <select class="border border-light text-light" name="hangVe" id="hangVe">
                            ${postDM.map((e) => {
                                return`
                                <option value="${e.id}" ${b.hangVe === e.id ? "selected" : ''}>${e.loaiVe}</option>`;
                            })}
                            </select>

                            <h4>Hành lý :</h4>
                            <input class="border border-light text-light" type="text" id="box" value="${b.id}">

                            <h4>Hình thức thanh toán :</h4>
                            <select class="border border-light text-light" name="pay" id="pay">
                                <option value="on">Thanh toán Online</option>
                                <option value="off">Thanh toán tiền mặt</option>
                            </select>
                        </div>
                        
                    </div>
                </div>
                <div class="d-flex mt-5 justify-content-between mx-5" id="orderCustomBtn">
                    <input class="border border-light text-light" type="reset" value="Reset">
                    <button >Cập Nhật</button>
                </div>
            </form>
        </div>
    `;
};
export default updateBookingAdmin ;