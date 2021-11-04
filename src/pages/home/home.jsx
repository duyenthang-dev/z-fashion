/**
 * *---------------------------  Header Area  ---------------------------------------------
 *
 *
 * *---------------------------  Hero slider ---------------------------------------------
 *
 *
 * *--------------------------- Feature slider --------------------------------------------------
 *
 *
 * *--------------------------- Tab product slider ---------------------------------------------
 *
 *
 * *---------------------------- Banner Area ---------------------------------------------
 *
 *
 * *-- ------------------------ Hot product Area ---------------------------------------------
 *
 *
 * *--------------------------- Brand Logo Area ---------------------------------------------
 *
 *
 * *--------------------------- Testononial Area ---------------------------------------------
 *
 *
 * *--------------------------- Footer Area ---------------------------------------------
 */

import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "./../../container/header/index";
import HeroSlider from "./../../container/hero-slider/index";
import Features from "./../../container/feature-icon/index";
import Footer from "./../../container/footer/index";
// import ProductRating from './../../components/product/productRating'
import TabProduct from "../../components/product/tab-product/tabProduct";
const Home = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Z Fashion | Refined Life</title>
            </MetaTags>
            <Header />
            <HeroSlider />
            <Features />
            {/* <ProductRating ratingValue = {3} /> */}
            <TabProduct />
            <Footer />
        </Fragment>
    );
};
export default Home;
