import HeaderOrrderComponent from "../components/headerOrder";
import FooterComponent from "../components/footer";
import ContentHome from "../components/contentHome";


const OrderPage = () => {
    return `
    ${HeaderOrrderComponent()}
    ${ContentHome()}
    ${FooterComponent()}
    `;
}
export default OrderPage ;