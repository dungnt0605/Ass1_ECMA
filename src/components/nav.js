const navigation = () => {
    return /*html*/`
    <nav class="navbar navbar-expand-lg " id="menu">
    <div class="container  " id="nav">
        <a class="navbar-brand fw-bold fs-2" href="/"><img src="../public/FOR NATURE (1) 1.png" alt="" class="w-50"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                <li class="nav-item ms-5 fw-bold">
                    <a class="nav-link active " href="/" id="navLink">Trang Chủ</a>
                </li>
                <li class="nav-item ms-5 fw-bold">
                    <a class="nav-link" href="/contact" id="navLink">Giới Thiệu </a>
                </li>
               
                <li class="nav-item dropdown ms-5 fw-bold">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Admin
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/admin/flight">Chuyến Bay</a></li>
                        <li><a class="dropdown-item" href="/admin/product">Danh Mục chuyến bay</a></li>
                        <li><a class="dropdown-item" href="/admin/booking">Đặt vé</a></li>
                    </ul>
                </li>
                <li class="nav-item ms-5 fw-bold">
                    <a  href="/order" id="navLink"> <button class="btn btn-primary">Đặt Vé</button> </a>
                </li>
                    
            </ul>

        </div>

    </div>
    </nav>
    `;
}
export default navigation ;