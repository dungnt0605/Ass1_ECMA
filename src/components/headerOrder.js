import navigation from "./nav";
import {dataArrayVe, dataArrayDanhMucVe } from "../../conn.js";


const HeaderOrrderComponent = () => {
    return `
    <header id="Header">
    ${navigation()}
        <div class="container  d-flex justify-content-between">
            <div class="w-50 me-5 mt-5" id="orderText">
                <h1 >" Đặt Vé Ngay - Khám Phá Hành Trình Mới! "</h1>
                <p class="w-75 text-white ">Hãy là một phần của chuyến phiêu lưu này! Đặt vé của bạn ngay bây giờ và chúng ta cùng nhau khám phá 
                    những trải nghiệm độc đáo, hấp dẫn. Đừng bỏ lỡ cơ hội tận hưởng những khoảnh khắc đáng nhớ và giao 
                    lưu cùng những người bạn mới.</p>
            </div>
            <form  class="w-50 rounded-5" id="order_form">
                <h3 class="text-center my-3 fw-bold">Đặt vé máy bay</h3>
                <div class="row  ">
                    <div class="col-sm-6">
                        <div class="card">
                            <h4>Họ và tên :</h4>
                            <input type="text" id="name" >

                            <h4>Số Căn cước :</h4>
                            <input type="number" id="idGuest" >

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
                            <select name="flight" id="flight">
                            ${dataArrayVe.map((e) => {
                                return`
                                <option value="${e.idVe}">${e.chuyenBay}</option>`;
                            })}
                            </select>

                            <h4>SĐT :</h4>
                            <input type="text" id="sdt" >

                        </div>
                        
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <h4>Nơi khởi hành :</h4>
                            <input type="text" id="form_order" >

                            <h4>Nơi đến :</h4>
                            <input type="text" id="to_order" >

                            <h4>Ngày khởi hành :</h4>
                            <input type="date" id="date_order" >

                            <h4>Hạng vé :</h4>
                            <select name="hangVe" id="hangVe">
                            ${dataArrayDanhMucVe.map((e) => {
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