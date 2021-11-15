import React, {Fragment} from 'react';
import MetaTags from "react-meta-tags";
import Header from "./../../container/header/index";
import Footer from "./../../container/footer/index";
import Breadcrumb from '../../components/blog/BreadcrumbBlog';
import BlogList1 from '../../components/blog/blogList1';
import Gallery from "./../../components/gallery/gallery";


const Blog = () => {
    return (
        <Fragment>
            <MetaTags>
            <title> Z Fashion | Refined Life</title>
            </MetaTags>
            <Header />
            <Breadcrumb />
            <BlogList1 />
            <Gallery />
            <Footer />
        </Fragment>
    );
};

export default Blog;