import logo from "./../../images/fashion-images/icons/logo.svg"
import "./header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img width={30} src={logo} alt="Logo" />
            <span>iziMove</span>
          </div>
          <nav className="header__nav">
            <ul>
              <li><a href="#">Catalog</a></li>
              <li><a href="#">Favorite</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#" className="header__nav-btn">Buy now</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header