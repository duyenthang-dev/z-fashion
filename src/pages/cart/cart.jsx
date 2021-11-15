import React, {Fragment} from 'react';
import MetaTags from "react-meta-tags";
import Header from "./../../container/header/index";
import Footer from "./../../container/footer/index";
// import ShopCart from '../../components/ShopCart/ShopCart';
import ShopCart from './../../container/shopCart/index';
const Cart = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Z Fashion | Refined Life</title>
            </MetaTags>
            <Header />
            <ShopCart />
            <Footer />
        </Fragment>
    );
};

export default Cart;