// import ProductItem from "./components/product/productItem";
import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import Header from './container/header/index.jsx';
import Footer from './container/footer/index.jsx';
import BlogSingle from "./components/blog/blogSingle";
const Test = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Header />
                <BlogSingle />
                <Footer />
            </BrowserRouter>
        </Fragment>
    );
};
export default Test;
