import "./tabProduct.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./../../../utility/css/utility.css";
import ProductItem from "./../productItem";

import {
    sweaterMale,
    shirtMale,
    khakiMale,
    sweaterFemale,
    skirtFemale,
} from "./../../../imageSource";
const listProduct = [
    {
        id: 1,
        title: "Áo thun nam chuột Mickey",
        status: "New",
        src: shirtMale.WHITE,
        price: 200000,
        rate: 4,
    },
    {
        id: 2,
        title: "Áo len nam",
        status: "-30%",
        src: sweaterMale.YEALLOW,
        price: 400000,
        rate: 5,
    },
    {
        id: 3,
        title: "Áo len nữ",
        status: "New",
        src: sweaterFemale.WHITE,
        price: 450000,
        rate: 3,
    },
    {
        id: 4,
        title: "Áo thun nam Marvel",
        status: "",
        src: shirtMale.MARVEL,
        price: 250000,
        rate: 4,
    },
    {
        id: 5,
        title: "Quần khaki nam",
        status: "-10%",
        src: khakiMale.MUSTARD,
        price: 300000,
        rate: 4,
    },
    {
        id: 6,
        title: "Váy ngắn nữ",
        status: "New",
        src: skirtFemale.PINK,
        price: 250000,
        rate: 5,
    },
    {
        id: 7,
        title: "Váy ngắn nữ",
        status: "-25%",
        src: skirtFemale.BLACK,
        price: 300000,
        rate: 3,
    },
    {
        id: 8,
        title: "Áo len nam",
        status: "",
        src: sweaterMale.GRAY,
        price: 200000,
        rate: 3,
    },
];
const renderListProduct = listProduct.map((item, i) => {
    return (
        <Grid item lg={3} md={4} sm={6} key={i + 1}>
            <ProductItem
                key={item.id}
                id={item.id}
                title={item.title}
                status={item.status}
                src={item.src}
                price={item.price}
                rate={item.rate}
            />
        </Grid>
    );
});
const TabProduct = () => {
    return (
        <section className="tab-product mt-7">
            <Container>
                <Grid container className="mb-4">
                    <Grid item lg={4} md={4}>
                        <div className="tab-product__title">
                            <h3>Sản phẩm mới</h3>
                        </div>
                    </Grid>

                    <Grid item lg={8} md={8} className="tab-product__filter">
                        <ul>
                            <li className="active">Tẩt cả</li>
                            <li>Nam</li>
                            <li>Nữ</li>
                            <li>Phụ kiện</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid container>{renderListProduct}</Grid>
            </Container>
        </section>
    );
};
export default TabProduct;
