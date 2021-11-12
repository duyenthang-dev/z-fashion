// import ProductItem from "./components/product/productItem";
import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import Header from "./container/header/index.jsx";
import Footer from "./container/footer/index.jsx";
// import BlogSingle from "./components/blog/blogSingle";
import ProductModal from "./components/product/product-modal/productModal";
import ProductItem from "./components/product/productItem";
import Login from "./pages/login-register/login.jsx";

const Test = () => {
    return (
        <Fragment>
        <Header />
        <Login />
        <Footer />
        </Fragment>
    );
};
export default Test;
