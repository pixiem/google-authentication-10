import React from 'react';
import { Link } from 'react-router-dom';
import "./Headnav.css"
const Headnav = () => {
  return (
    <div className="row row-col-4 navigation">
      <div className="col">
        <div className="nav-image">
          <img width="120px" src="./pngwing.com.png" alt="" />
        </div>
      </div>
      <div className="col">
        <div className="menu-container ">
          <ul className="d-flex align-items-end justify-content-end">
            <Link to="/home" className="items">
              <li>Home</li>
            </Link>
            <Link to="/services" className="items">
              <li>Services</li>
            </Link>
            <Link to="/about" className="items">
              <li>About</li>
            </Link>
            <Link to="/contact" className="items">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="button-div">
        <Link to="/login" > <button className="login-signup">
            <img width="25px" src="./login-icon-3036.png" alt="" />  LOGIN </button></Link>
          <button className="login-signup">
            <img width="25px" src="./PinClipart.com_sign-up-today-clip_3954644.png" alt="" /> SIGNUP</button>
        </div>
      </div>

    </div>
  );
};

export default Headnav;