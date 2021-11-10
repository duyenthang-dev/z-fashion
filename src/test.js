// import ProductItem from "./components/product/productItem";
import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import Header from "./container/header/index.jsx";
import Footer from "./container/footer/index.jsx";
// import BlogSingle from "./components/blog/blogSingle";
import ProductModal from "./components/product/product-modal/productModal";
import ProductItem from "./components/product/productItem";
import {
    sweaterMale,
    shirtMale,
    khakiMale,
    sweaterFemale,
    skirtFemale,
} from './imageSource.js'
const a = {
    id: 1,
    title: "Áo thun nam chuột Mickey",
    status: "New",
    src: shirtMale.WHITE,
    price: 200000,
    rate: 4,
};
const Test = () => {
    return (
        <Fragment>
            <BrowserRouter>
                {/* <Header /> */}
                <ProductItem
                    key={a.id}
                    id={a.id}
                    title={a.title}
                    status={a.status}
                    src={a.src}
                    price={a.price}
                    rate={a.rate}
                />
                <ProductModal />
                <Footer />
            </BrowserRouter>
        </Fragment>
    );
};
export default Test;
