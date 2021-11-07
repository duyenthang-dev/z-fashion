import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "./../../container/header/index";
import Footer from "./../../container/footer/index";
import ShopBreadCrumb from "../../components/shop-bread-crumb/shopBreadCrumb"
import ShopMainContent from "../../components/shop-main-content/shopMainContent";
import Gallery from "./../../components/gallery/gallery";
const Shop = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>
          Fashion | Shop
        </title>
      </MetaTags>
        <Header />
        <ShopBreadCrumb />
        <ShopMainContent />
        <Gallery />
        <Footer />
    </Fragment>
  );
};

export default Shop;


/**
 * *---------------------------  Header Area  -----------------------------------------
 * 
 * 
 * *---------------------------  Breadcum ---------------------------------------------
 *  
 * 
 * *--------------------------- Shop sidebar ------------------------------------------
 *  
 * 
 * *--------------------------- Shop top bar -------------------------------------------
 * 
 * 
 * *-------------------------- Shop product --------------------------------------------
 * 
 * 
 * *---------------------------- Shop pagination ---------------------------------------
 * 
 * 
 * *--------------------------- Footer Area --------------------------------------------
 */