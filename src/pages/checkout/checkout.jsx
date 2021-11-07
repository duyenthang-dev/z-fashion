import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import "./../../utility/css/utility.css";
import Header from "./../../container/header/index";
import Footer from "./../../container/footer/index";
import Bill from "./../../container/checkout/bill/index";
import CusInfo from "./../../container/checkout/cusInfo/index";

const Chekout = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Z Fashion | Refined Life</title>
            </MetaTags>
            <Header />
            <div
                className="checkout-area"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <CusInfo />
                <Bill />
            </div>
            <Footer />
        </Fragment>
    );
};

export default Chekout;
