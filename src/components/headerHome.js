import navigation from "./nav";

const HeaderHomeComponent = () => {
  return `
  <header id="header">
    ${navigation()}
    <div class="container" id="banner">
    <h1 class=" text-center " id="title">Tìm và đặt <br> một trải nghiệm tuyệt vời </h1>
    <div class="w-75 m-auto mt-5 rounded-pill" id="customBgBanner">
    </div>
    <img src="../public/john-mcarthur-PrdNTrIrG8w-unsplash-removebg.png" alt="" id="customImgBanner">
</div>
</header>
    `;
};
export default HeaderHomeComponent;
