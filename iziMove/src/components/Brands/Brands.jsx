import "./brands.css";

const Brands = () => {
  return (
    <section className="brands">
        <div className="brands__list">
          <div className="brands__scroll">
            <div className="brands__rightToLeft">
              <p>
                / iziMove / iziMove / iziMove / iziMove / iziMove / iziMove /
                iziMove / iziMove / iziMove / iziMove /
              </p>
              <p>
                {" "}
                iziMove / iziMove / iziMove / iziMove / iziMove / iziMove /
                iziMove / iziMove / iziMove / iziMove
              </p>
            </div>
            <div className="brands__leftToRight">
              <p>
                / iziMove / iziMove / iziMove / iziMove / iziMove / iziMove /
                iziMove / iziMove / iziMove / iziMove /
              </p>
              <p>
                {" "}
                iziMove / iziMove / iziMove / iziMove / iziMove / iziMove /
                iziMove / iziMove / iziMove / iziMove
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Brands;
