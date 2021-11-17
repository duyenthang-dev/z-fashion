import React, {Fragment} from 'react';
import MetaTags from "react-meta-tags";
import Header from "./../../container/header/index";
import Footer from "./../../container/footer/index";
// import Discount from './../../components/ShopCart_discount/ShopCart_discount';
import Gallery from "./../../components/gallery/gallery";


import ShopCart from './../../container/shopCart/index';
const Cart = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Z Fashion | Refined Life</title>
            </MetaTags>
            <Header />
            <ShopCart />
            <Gallery />
            <Footer />
        </Fragment>
    );
};

export default Cart;