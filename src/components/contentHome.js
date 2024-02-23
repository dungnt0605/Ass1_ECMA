import AddressComponent from "./addressFlight";


const ContentHome = () => {
    return /*html*/`
   
    ${AddressComponent()}; 
    

    <div class=" my-5 " id="search">
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