import React from 'react';
import './homenav.css'
import { Link } from "react-router-dom";


function Homenav() {
    return (
        <div className='home_nav'>
            <img src="./home-logo-icon-0.jpg" alt="Home Logo" />
            <p>&nbsp;&nbsp;</p>
            <Link to={'/'}>
                Home
            </Link>
            <p>&nbsp;&gt;&nbsp;</p>
            <Link to={'/check-out'}>
                Checkout
            </Link>
        </div>
    )
}

export default Homenav;