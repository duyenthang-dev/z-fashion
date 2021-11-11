// import ProductItem from "./components/product/productItem";
import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import Header from "./container/header/index.jsx";
import Footer from "./container/footer/index.jsx";
// import BlogSingle from "./components/blog/blogSingle";
import ProductModal from "./components/product/product-modal/productModal";
import ProductItem from "./components/product/productItem";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";

import {
    sweaterMale,
    shirtMale,
    khakiMale,
    sweaterFemale,
    skirtFemale,
} from "./imageSource.js";
const a = {
    id: 1,
    title: "Áo thun nam chuột Mickey",
    status: "New",
    src: shirtMale.WHITE,
    price: 200000,
    rate: 4,
};

const Test = ({ productList }) => {
    const renderList = productList.map((item, index) => {
        return (
            <Grid item lg={3} md={4} sm={6} key={index + 1}>
                <ProductItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    status={item.status}
                    src={item.src}
                    price={item.price}
                    rate={item.rate}
                    desc={item.desc}
                />
            </Grid>
        );
    });
    console.log(productList[0].id);
    return (
        <Fragment>
            <BrowserRouter>
                <Header />
                <Grid container>
                    {renderList}
                </Grid>
                <Footer />
            </BrowserRouter>
        </Fragment>
    );
};
const mapStateToProps = (state) => {
    return {
        productList: state.products.listProduct,
    };
};
export default connect(mapStateToProps)(Test);
