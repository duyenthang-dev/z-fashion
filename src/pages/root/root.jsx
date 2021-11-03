import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "./../../container/header/index";
import Footer from "./../../container/footer/index";
const Root = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Z Fashion | Refined Life</title>
            </MetaTags>
            <Header />
            <Footer />
        </Fragment>
    );
};
export default Root;
