import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-one">
                <img width="200px" src="./pngwing.com.png" alt="" />
                <p>For Any Kind Of Help Please Call Us On 0312517433</p>
            </div>
            <div className="app-link">
                <img src="./playstore.svg" alt="" />
                <img width="200px" src="./imgbin_iphone-app-store-png.png" alt="" />
            </div>
            <hr className="horizontal-line" />
            <span >Copyright © 2015-2021 Shevron Diagonstic Center</span>

        </div>
    );
};

export default Footer;