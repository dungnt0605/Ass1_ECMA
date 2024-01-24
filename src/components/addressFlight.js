import { dataArrayVe } from "../../conn.js";

const AddressComponent = () => {
    
    return `
    <div class="container my-5 " id="explore">
    <h3 class="mb-5">Khám phá</h3>
    <div class="row">
        <div class="col-lg-2">
            <img src="../public/Khám phá.png" alt="" class=" mt-5" style="width: 30%;">

        </div>
    ${dataArrayVe.map((e) => {
        return `
        <div class="col-lg-3">
            <div class="card rounded-5 me-0" style="width: 18rem; overflow: hidden;">
                <img src='../public/${e.image}' class="card-img-top" style="height: 17rem;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${e.noiden}</h5>
                    <p class="card-text">Việt Nam</p>
                    <div class="d-flex align-items-center justify-content-between">
                        <span  class="d-flex align-items-center">Giá chỉ : <h6 class="fs-3">${e.gia} k</h6></span>
                        
                        <a href="#" class="btn btn-primary rounded-5 px-3">Go</a>
                    </div>
                </div>
            </div>
        </div>`;
        })}
        </div> 
    </div> 
    ` ;
}
export default AddressComponent;