import navigation from "./nav";
import { router, useEffect, useState } from "../libs/index.js";


const HeaderOrrderComponent = () => {

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

    useEffect(() => {
        const name = document.getElementById("name");
        const idGuest = document.getElementById("idGuest");
        const email = document.getElementById("email");
        // const genderInputs = document.querySelectorAll(".d-flex input.gender");
        // genderInputs.forEach(gender => {
        //     if (gender.checked) {
        //         console.log('Giá trị của input đã được chọn:', gender.value);
        //         selectedGender = gender.value;
        //     }
        // });
        const sdt = document.getElementById("sdt");
        const flight_a = document.getElementById("flight_a");
        const from_order = document.getElementById("from_order");
        const to_order = document.getElementById("to_order");
        const date_order = document.getElementById("date_order");
        const hangVe = document.getElementById("hangVe");
        const box = document.getElementById("box");
        const pay = document.getElementById("pay");

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
                "role" : 0
            };
            console.log(newOrder);
            fetch("http://localhost:3000/datVe", {
                method : "POST",
                headers : {
                    "content-Type" : "application/json"
                },
                body : JSON.stringify(newOrder)
            }).then(() => router.navigate("/"));
        })
    })
    return /*html*/`
    <header id="Header">
    ${navigation()}
        <div class="container  d-flex justify-content-between">
            <div class="w-50 me-5 mt-5" id="orderText">
                <h1 >" Đặt Vé Ngay - Khám Phá Hành Trình Mới! "</h1>
                <p class="w-75 text-white ">Hãy là một phần của chuyến phiêu lưu này! Đặt vé của bạn ngay bây giờ và chúng ta cùng nhau khám phá 
                    những trải nghiệm độc đáo, hấp dẫn. Đừng bỏ lỡ cơ hội tận hưởng những khoảnh khắc đáng nhớ và giao 
                    lưu cùng những người bạn mới.</p>
            </div>
            <form action="" class="w-50 rounded-5" id="order_form">
                <h3 class="text-center my-3 fw-bold">Đặt vé máy bay</h3>
                <div class="row  ">
                    <div class="col-sm-6">
                        <div class="card">
                            <h4>Họ và tên :</h4>
                            <input type="text" id="name" >

                            <h4>Số Căn cước :</h4>
                            <input type="text" id="idGuest" >

                            <h4>Email :</h4>
                            <input type="email" id="email" >

                            <h4>Giới tính :</h4>
                            <div class="d-flex">
                                <h4>Nam</h4>
                                <input type="radio" class="gender mx-2" name="gender" value="1" >
                                <h4>Nữ</h4>
                                <input type="radio" class="gender mx-2" name="gender" value="0">
                            </div>
                            
                            <h4>Chọn chuyến bay :</h4>
                            <select name="flight_a" id="flight_a">
                            ${postVe.map((e) => {
                                return`
                                <option value="${e.id}">${e.chuyenBay}</option>`;
                            })}
                            </select>

                            <h4>SĐT :</h4>
                            <input type="text" id="sdt" >

                        </div>
                        
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <h4>Nơi khởi hành :</h4>
                            <input type="text" id="from_order" >

                            <h4>Nơi đến :</h4>
                            <input type="text" id="to_order" >

                            <h4>Ngày khởi hành :</h4>
                            <input type="date" id="date_order" >

                            <h4>Hạng vé :</h4>
                            <select name="hangVe" id="hangVe">
                            ${postDM.map((e) => {
                                return`
                                <option value="${e.id}">${e.loaiVe}</option>`;
                            })}
                            </select>

                            <h4>Hành lý :</h4>
                            <input type="text" id="box" >

                            <h4>Hình thức thanh toán :</h4>
                            <select name="pay" id="pay">
                                <option value="on">Thanh toán Online</option>
                                <option value="off">Thanh toán tiền mặt</option>
                            </select>
                        </div>
                        
                    </div>
                </div>
                <div class="d-flex mt-5 justify-content-between mx-5" id="orderCustomBtn">
                    <input type="reset" value="Reset">
                    <button >Đặt Vé</button>
                </div>
            </form>
        </div>
    </header>
    `;
};
export default HeaderOrrderComponent ;