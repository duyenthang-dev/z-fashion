import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import "./../../utility/css/utility.css";
import Header from "./../../container/header/index";
import HeroSliderContainer from "./../../container/hero-slider/index";
import Features from "./../../container/feature-icon/index";
import Footer from "./../../container/footer/index";
import Banner from "./../../container/banner/index";
import BlogList from "./../../container/blog/blog-list/index";
import TabProduct from "../../components/product/tab-product/tabProduct";
import Testimonial from "./../../container/testimonial/index";
import Discount from "./../../container/discount/index";
import Gallery from "./../../components/gallery/gallery";

const Home = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Z Fashion | Refined Life</title>
            </MetaTags>
            <Header />
            <HeroSliderContainer />
            <Features />
            <TabProduct />
            <Banner />
            <Testimonial />
            <Discount />
            <BlogList />
            <Gallery />
            <Footer />
        </Fragment>
    );
};
export default Home;
