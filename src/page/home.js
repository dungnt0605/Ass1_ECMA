import ContentHome from "../components/contentHome";
import FooterComponent from "../components/footer";
import HeaderHomeComponent from "../components/headerHome";


const HomePage = () => {
    
    return `
    ${HeaderHomeComponent()}
    
    ${ContentHome()}

    ${FooterComponent()}
    `;
}
export default HomePage ;