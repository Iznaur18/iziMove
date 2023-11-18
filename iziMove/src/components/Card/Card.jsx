/* eslint-disable react/prop-types */
import "./card.css";
import arrowImage from "./../../images/fashion-images/icons/arrow.svg";

const Card = (props) => {
  return (

    <div className="card">
      <a href="#" className="card__link"></a>
      <img className="card__img" src={props.img} alt="Category" />
      <div className="card__body">
        <div className="card__text">
          <div className="card__title">{props.title}</div>
          <div className="card__muted">Explore now!</div>
        </div>
        <div className="card__icon">
          <img src={arrowImage} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Card;
