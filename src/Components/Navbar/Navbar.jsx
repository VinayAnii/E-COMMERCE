import React, { useContext, useState } from "react";
import "./Navbar.css";
import NavbarIcon from "../../Assets/nav_icon.png";
import cartIcon from "../../Assets/cart.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={NavbarIcon} alt="Icon" className="nav-img" />
        <p>
          <span className="para-letter">S</span>HOPPER
        </p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu('shop')}>
          <Link style={{textDecoration:'none'}} to="/">Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('Men')}>
          <Link style={{textDecoration:'none'}} to="/mens">Men</Link>
          {menu === "Men" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('Women')}>
          <Link style={{textDecoration:'none'}} to="/womens">Women</Link>
          {menu === "Women" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('Kids')}>
          <Link style={{textDecoration:'none'}} to="/kids">Kids</Link>
          {menu === "Kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="" className="nav-cart-img" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

