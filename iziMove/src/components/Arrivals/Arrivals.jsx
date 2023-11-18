import Card from "../Card/Card"
import "./arrivals.css"

import cat01Img from "./../../images/fashion-images/categories/cat-01.jpg"
import cat02Img from "./../../images/fashion-images/categories/cat-02.jpg"
import cat03Img from "./../../images/fashion-images/categories/cat-03.jpg"
import cat04Img from "./../../images/fashion-images/categories/cat-04.jpg"

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="title-2">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals__cards">
          <Card title="Hoodies more" img={cat01Img} />
          <Card title="Shoes more" img={cat04Img} />
          <Card title="T-Shirts more" img={cat02Img} />
          <Card title="Shoes more" img={cat03Img} />
          <Card title="T-Shirts more" img={cat02Img} />
          <Card title="Hoodies more" img={cat01Img} />
          <Card title="Shoes more" img={cat04Img} />
          <Card title="T-Shirts more" img={cat02Img} />
        </div>
      </div>
    </section>
  )
}

export default Arrivals