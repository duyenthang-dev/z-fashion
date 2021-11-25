import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import "./../../utility/css/utility.css";
import Header from "./../../container/header/index";
import Footer from "./../../container/footer/index";
import SearchList from "./../../components/search/searchList";
const Search = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Z Fashion | Refined Life</title>
            </MetaTags>
            <Header />
            {/* <TabProduct /> */}
            <SearchList />
            <Footer />
        </Fragment>
    );
};
export default Search;
