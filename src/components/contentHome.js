const ContentHome = () => {
    return `
    <div class="container my-5 " id="explore">
    <h3 class="mb-5">Khám phá</h3>
    <div class="row">
        <div class="col-lg-3">
            <img src="../public/Khám phá.png" alt="" class="w-25 mt-5">

        </div>
        <div class="col-lg-3">
            <div class="card rounded-5" style="width: 16rem;">
                <img src="../public/unsplash_XVoyX7l9ocY.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Glenfinan viaduct</h5>
                    <p class="card-text">United Kingdom</p>
                    <div class="d-flex align-items-center justify-content-between">
                        <span  class="d-flex align-items-center">Giá chỉ : <h6 class="fs-3">1044k</h6></span>
                        
                        <a href="#" class="btn btn-primary rounded-5 px-3">Go</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="card rounded-5" style="width: 16rem;">
                <img src="../public/unsplash_itM5EI3VnOk.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Linh Son Buu</h5>
                    <p class="card-text">Việt Nam</p>
                    <div class="d-flex align-items-center justify-content-between">
                        <span  class="d-flex align-items-center">Giá chỉ : <h6 class="fs-3 ps-2">1044k</h6></span>
                        
                        <a href="#" class="btn btn-primary rounded-5 px-3">Go</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="card rounded-5" style="width: 16rem;">
                <img src="../public/unsplash_t7YycgAoVSw.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Ginos Baifern</h5>
                    <p class="card-text">Turkey</p>
                    <div class="d-flex align-items-center justify-content-between">
                        <span  class="d-flex align-items-center">Giá chỉ : <h6 class="fs-3">1044k</h6></span>
                        
                        <a href="#" class="btn btn-primary rounded-5 px-3">Go</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class=" my-5 pt-5" id="search">
    <div class="mt-5">
        <h3 >Tìm địa điểm của bạn</h3>
        <div class="mt-5" id="custom_bg_search">
            <form class="container  text-white" id="form">
                <div class="d-flex align-items-center ">
                    <h4 >Nơi đi</h4>
                    <h4 id="label_date">Ngày đi</h4>
                </div>
                <div class="d-flex align-items-center pt-4 " >
                    <input type="text" id="addressFrom" placeholder="From ...">
                    <input type="date" name="" id="dateFrom">
                </div>
                <div class="d-flex align-items-center  pt-4">
                    <h4 >Nơi đến</h4>
                    <h4 id="label_date">Ngày đến</h4>
                </div>
                <div class="d-flex align-items-center pt-4 ">
                    <input type="text" id="addressTo" placeholder="To ..."> 
                    <input type="date" name="" id="dateTo">
                </div>
                <div class="d-flex align-items-center pt-4 ">
                    <a href="#"><button id="custom_btn" >Tìm Kiếm</button></a>
                </div>
            </form>
        </div>
        <div id="sale" class="d-flex justify-content-center" >
            <h2 >Sale Of </h2> <br>
            <div class=""><span class="fs-1 ps-3 pb-3">50%</span></div>
        </div>
    </div>
</div>
    `;
}
export default ContentHome ;