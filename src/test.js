// import ProductItem from "./components/product/productItem";
import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import Header from './container/header/index.jsx';
import Footer from './container/footer/index.jsx';
const Test = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Header />
                <h2>Test</h2>
                <Footer />
            </BrowserRouter>
        </Fragment>
    );
};
export default Test;
