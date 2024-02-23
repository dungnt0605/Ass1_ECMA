import { router, useEffect } from "../../libs";

const CreateDMAdmin = () =>{

    useEffect(() =>{
        const loai = document.querySelector("#loai");
        const mota = document.querySelector("#mota");
        const formCreateDM = document.querySelector("#formCreateDM");

        formCreateDM.addEventListener("submit" , (e) =>  {
            
            e.preventDefault();

            let newCreate = {
                "loaiVe" : loai.value,
                "moTa" : mota.value,
            }
            console.log(newCreate);
            fetch("http://localhost:3000/danhMucVe" , {
                method : "POST",
                headers : {
                    "content-Type" : "application/json"
                },
                body : JSON.stringify(newCreate)
            }).then(() => router.navigate("/admin/product/"));
        })
    })
    return `
            <div id="create_admin">
                
                <div class="w-25 p-4" id="create_admin_form">
                    <h2 class="text-center  my-3">Thêm Chuyến Bay</h2>
                    <a href="/admin/product/" class="btn btn-primary mb-4">Danh sách</a>
                    <form action="" id="formCreateDM" >
                            <h6 class="fw-bold mt-3">Chuyến bay</h6>
                            <input class="form-control" type="text" id="loai" >

                            <h6 class="fw-bold mt-3">Mô Tả : </h6>
                            <textarea class="w-100 border-1 border-light rounded-2" id="mota" cols="30" rows="10" style="height:70px;"></textarea>    

                        <div class="d-flex justify-content-between mt-5">
                            <input class="btn btn-primary fw-bold " type="reset" >
                            <button class="btn btn-primary fw-bold  rounded-3 text-center"  id="create_f">Thêm Chuyến Bay</button>
                        </div>
                    </form>
                </div>
            </div>
    `;
}
export default CreateDMAdmin;