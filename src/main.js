import Navigo from "Navigo";
import ContactPage from "./page/gioiThieu";
import HomePage from "./page/home";
import OrderPage from "./page/order";
import './style.css'

const render = (container , Components) => {
    document.querySelector(container).innerHTML = Components();
}
const router = new Navigo('/' , {linksSelector: "a"});
router.on ('/' , () => {
    render('#app' , HomePage);
})
router.on ('/contact' , () => {
    render('#app' , ContactPage);
})
router.on ('/order' , () => {
    render('#app' , OrderPage);
})
router.resolve();