import ContactPage from "./page/gioiThieu";
import HomePage from "./page/home";
import OrderPage from "./page/order";
import './style.css'
import { render, router } from "./libs";
import flightAdmin from "./admin/ChuyenBay";
import CreateFlightAdmin from "./admin/ChuyenBay/create";
import UpdateFlightAdmin from "./admin/ChuyenBay/update";
import productAdmin from "./admin/danhMuc";
import CreateDMAdmin from "./admin/danhMuc/create";
import UpdateDMAdmin from "./admin/danhMuc/update";
import bookingAdmin from "./admin/datVe";
import updateBookingAdmin from "./admin/datVe/update";


router.on ('/' , () => {
    render(app , HomePage);
})
router.on ('/contact' , () => {
    render(app , ContactPage);
})
router.on ('/order' , () => {
    render(app , OrderPage);
})

router.on('/admin/flight' , () => {
    render(app , flightAdmin)
})

router.on('/admin/flight/update/:id', ({data}) => {
    render(app ,() => UpdateFlightAdmin(data.id))
})

router.on('/admin/flight/create' , () => render(app , CreateFlightAdmin))

router.on("/admin/product" , () => render(app , productAdmin));

router.on("/admin/product/create" , () => render(app, CreateDMAdmin));

router.on("/admin/product/update/:id" , ({data}) => {
    render(app , () => UpdateDMAdmin(data.id))
})

router.on("/admin/booking" , () => render(app, bookingAdmin));

router.on("/admin/booking/update/:id" , ({data}) => {
    render(app , () => updateBookingAdmin(data.id))
});

router.resolve();