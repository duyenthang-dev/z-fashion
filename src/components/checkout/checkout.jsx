import React, { Fragment } from 'react';
import './checkout.css';
import Header from "./../../container/header/index";
import Footer from "./../../container/footer/index";
import Cusinfo from './CusInfo/CusInfo';
import Bill from './bill/Bill';
import Homenav from './homenav/homenav';

function Checkout() {
    return (
        <Fragment>
            <Header />
            <Homenav />
            <div className="main-content">
                <Cusinfo />
                <Bill />
            </div>
            <Footer />
        </Fragment>
    )
}

export default Checkout;
