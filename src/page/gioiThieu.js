import FooterComponent from "../components/footer";
import HeaderHomeComponent from "../components/headerHome";

const ContactPage = () => {
    return `
    ${HeaderHomeComponent()}
    <div class="container">
        <div class="row  my-5" id="contact">
            <div class="col-sm-4">
            
                <h2>Chào mừng đến với Avariance <br>
                 - Bay Cùng Niềm Tin!</h2>
                <p>"Kính chào quý khách! Chào mừng đến với Avariance, 
                điểm đến tin cậy của bạn cho mọi nhu cầu đặt vé máy bay
                 trực tuyến. Tại Avariance, chúng tôi không chỉ đơn thuần 
                 là cung cấp vé máy bay, mà còn tận tâm mang đến cho bạn những
                  trải nghiệm bay đáng nhớ nhất, nơi mỗi chuyến đi không chỉ
                   là việc di chuyển từ điểm này đến điểm khác, mà là hành
                    trình khám phá và tận hưởng. Với Avariance,
                     mỗi chuyến bay là một dấu ấn đặc biệt trong hành trình của
                      bạn, và chúng tôi cam kết đem đến sự thoải mái, an toàn 
                      và hạnh phúc cho từng khoảnh khắc trên không. Hãy để 
                      Avariance đồng hành cùng bạn, khám phá thế giới rộng 
                      lớn này với niềm tin và sự an tâm tuyệt đối."</p>
            </div>
            <div class="col-sm-8">
                <div class="card rounded-5 ms-5 ps-5" id="contact-img"></div>
            </div>
        </div>
    </div>
    <div class="container my-5 pt-5" id="">
    <h2 class="text-center ">Tại Sao Nên Chọn Avariance ?</h2>
    <div class="row">
        <div class="col-sm-3">
            <div class="card rounded-4 mt-5" id="service">
                <div class="card-body">
                    <h4 class="card-title" style="font-family: 'Oswald', sans-serif;">Giá Cả Cạnh Tranh</h4>
                    <p class="card-text" style="font-size: 15px;">Cam kết giá vé tốt nhất, với nhiều ưu đãi độc quyền không thể bỏ qua.</p>
                </div>
            </div>
            <div class="card rounded-4 mt-5" id="service">
                <div class="card-body">
                    <h4 class="card-title" style="font-family: 'Oswald', sans-serif;">Đa Dạng Chuyến Bay</h4>
                    <p class="card-text" style="font-size: 15px;"> Lựa chọn vô tận với các chuyến bay nội địa và quốc tế từ hàng trăm hãng hàng không hàng đầu thế giới.</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <img src="../public/map.png" alt="" class="w-100 mt-4" style="filter: drop-shadow(3px 3px rgb(16, 171, 233));">
        </div>
        <div class="col-sm-3">
            <div class="card rounded-4 mt-5" id="service">
                <div class="card-body">
                    <h4 class="card-title" style="font-family: 'Oswald', sans-serif;">Đặt Vé Dễ - Nhanh</h4>
                    <p class="card-text" style="font-size: 15px;">Giao diện thân thiện, dễ sử dụng, đặt vé chỉ trong vài bước đơn giản.</p>
                </div>
            </div>
            <div class="card rounded-4 mt-5" id="service">
                <div class="card-body">
                    <h4 class="card-title" style="font-family: 'Oswald', sans-serif;">Dịch Vụ Chu Đáo</h4>
                    <p class="card-text" style="font-size: 15px;">Đội ngũ hỗ trợ khách hàng sẵn sàng 24/7 để giải đáp mọi thắc mắc và hỗ trợ trong suốt hành trình của bạn.y</p>
                </div>
            </div>
        </div>
    </div>
    </div>

    ${FooterComponent()}
    `;
}
export default ContactPage ;