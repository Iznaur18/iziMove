/* eslint-disable react/no-unescaped-entities */
import "./promo.css";
import promoImg from "./../../images/fashion-images/images/header-img 4_animation.gif";
import video from "./../../images/fashion-images/video/izimove.mp4";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              <span className="highlight">
                <span>LET ME</span>
              </span>{" "}
              SHOW YOU{" "}
              <span className="highlight highlight--yellow">
                <span>3D MODELS</span>
              </span>{" "}
              OF SHOES.
            </div>
            <div className="promo__desc">
              3D gallery of author's shoes for sale,
              <br /> New models every month!
            </div>
            <div className="promo__btn-wrapper">
              <a href="#" className="promo__btn">
                Buy now
              </a>
            </div>
          </div>
          <video
            className="promo__video"
            src={video}
            autoPlay
            muted
            loop
          ></video>
          <div className="promo__img">
            <img height={600} src={promoImg} alt="Promo" />
          </div>
        </div>
      </div>
      <video
            className="promo__video2"
            src={video}
            autoPlay
            muted
            loop
          ></video>
    </section>
  );
};

export default Promo;
