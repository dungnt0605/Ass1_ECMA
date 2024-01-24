import navigation from "./nav";

const HeaderHomeComponent = () => {
  return `
  <header id="header">
  ${navigation()}
    <div class="container" id="banner">
            <h1 class=" text-center mb-5 pb-5" id="title">Tìm và đặt <br> một trải nghiệm tuyệt vời </h1>
            <div class="w-75 m-auto  rounded-pill" id="customBgBanner">
            </div>
            <img src="../public/figma_plane.png" alt="" id="customImgBanner">
        </div>
    </header>
    `;
};
export default HeaderHomeComponent;
