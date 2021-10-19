import React from 'react';
import Footer from '../Footer/Footer';
import Headnav from '../navigation/Headnav';

import "./Notfound.css"
const Notfound = () => {
    return (
        <div>
            <Headnav></Headnav>
            <img width="500px" src="./86418032b715698a4dfa6684b50c12af.gif" alt="" />
            <h1>404 PAGE NOT FOUND</h1>
            <Footer></Footer>
        </div>
    );
};

export default Notfound;