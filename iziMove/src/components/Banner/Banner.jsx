import "./banner.css";
import bannerImg1 from "./../../images/fashion-images/images/promo-img.jpg";
import bannerImg2 from "./../../images/fashion-images/images/promo-img2.jpg";
import bannerImg3 from "./../../images/fashion-images/images/promo-img3.jpg";
import bannerImg4 from "./../../images/fashion-images/images/promo-img4.jpg";
import Carousel from "../Carousel/Carousel";

const Banner = () => {

  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__img">
          <Carousel>
            <img src={bannerImg1} alt="image" />
            <img src={bannerImg2} alt="image" />
            <img src={bannerImg3} alt="image" />
            <img src={bannerImg4} alt="image" />
          </Carousel>
        </div>
        <div className="banner__text">
          <div className="banner__title">
            <span className="highlight">
              <span>PAYDAY</span>
            </span><br />
            SALE NOW
          </div>
          <div className="banner__desc">
            Spend minimal $100 get 30% off <br /> voucher code for your next purchase 1
            <br />
            <br />
            <h4>June - 10 June 2021</h4>*Terms & Conditions apply
          </div>
          <div className="banner__btn-wrapper">
            <a href="#" className="banner__btn">
              Buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
