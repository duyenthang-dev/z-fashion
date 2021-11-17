import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../../container/header/index";
import Footer from "../../container/footer/index";
import Register from "./../../components/register/register";

const Login = () => {
    return (
        <Fragment>
            <MetaTags>
                <title> Z Fashion | Blog </title>
            </MetaTags>
            <Header />

            <Register />

            <Footer />
        </Fragment>
    );
};

export default Login;
