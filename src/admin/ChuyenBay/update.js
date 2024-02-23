import navigation from "../../components/nav";
import { router, useEffect, useState } from "../../libs";

const UpdateFlightAdmin = (id) =>{
    const [flight , setFlight] = useState({}) ;

    useEffect(() => {
        fetch("http://localhost:3000/Ve/"+id)
        .then((response) => response.json())
        .then((data) => setFlight(data))
    },[]);
    useEffect(() =>{
        const chuyenBay = document.querySelector("#chuyenBay");
        const time = document.querySelector("#time");
        const gia = document.querySelector("#gia");
        const noidi = document.querySelector("#noidi");
        const noiden = document.querySelector("#noiden");
        const formUpdateFlight = document.querySelector("#formUpdateFlight");
        formUpdateFlight.addEventListener("submit" , (e) =>  {
            
            e.preventDefault();
            

            let newUpdate = {
                "chuyenBay" : chuyenBay.value,
                "noidi" : noidi.value,
                "noiden" : noiden.value,
                "time" : time.value,
                "gia" : gia.value
            }
            fetch("http://localhost:3000/Ve/"+id  , {
                method : "PUT",
                headers : {
                    "content-Type" : "application/json"
                },
                body : JSON.stringify(newUpdate)
            }).then(() => router.navigate("/admin/flight/"));
        })
    })
    return `
            <div id="create_admin">
                
                <div class="w-50 p-4" id="create_admin_form">
                    <h2 class="text-center  my-3">Sửa Chuyến Bay</h2>
                    <a href="/admin/flight/" class="btn btn-primary mb-4">Danh sách</a>
                    <form action="" id="formUpdateFlight" class="row">
                        <div class="col-6">
                            <h6 class="fw-bold mt-3">Chuyến bay</h6>
                            <input class="form-control" type="text" id="chuyenBay" value="${flight.chuyenBay}">

                            <h6 class="fw-bold mt-3">Ảnh :</h6>
                            <input class="form-control" type="time" id="time" value="${flight.time}">
                        
                            <h6 class="fw-bold mt-3">Giá : </h6>
                            <input class="form-control" type="text" id="gia" value="${flight.gia}">
                        </div>
                        <div class="col-6">
                            <h6 class="fw-bold mt-3">Nơi đi : </h6>
                            <input class="form-control" type="text" id="noidi" value="${flight.noidi}">

                            <h6 class="fw-bold mt-3">Nới đên : </h6>
                            <input class="form-control" type="text" id="noiden" value="${flight.noiden}">
                        </div>
                        <div class="d-flex justify-content-between mt-5">
                            <input class="btn btn-primary fw-bold " type="reset" >
                            <button class="btn btn-primary fw-bold  rounded-3 text-center"  id="create_f">Sửa Chuyến Bay</button>
                        </div>
                    </form>
                </div>
            </div>
    `;
}
export default UpdateFlightAdmin;