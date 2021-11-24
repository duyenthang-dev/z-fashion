import "./tabProduct.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./../../../utility/css/utility.css";
import ProductItem from "./../productItem";
import {
    sweaterFemale,
    skirtFemale,
} from "./../../../imageSource";
const listProduct = [
    {
        id: 1,
        title: "Áo len nữ",
        status: "New",
        src: sweaterFemale.ORANGE,
        price: 200000,
        rate: 4,
    },
    {
        id: 2,
        title: "Áo len nữ",
        status: "-30%",
        src: sweaterFemale.RED,
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
        title: "Váy nữ",
        status: "-25%",
        src: skirtFemale.BLACK,
        price: 300000,
        rate: 5,
    },
    {
        id: 5,
        title: "Váy nữ",
        status: "-10%",
        src: skirtFemale.CARO,
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
        title: "Váy nữ",
        status: "-25%",
        src: skirtFemale.BLACK,
        price: 300000,
        rate: 5,
    },
    {
        id: 8,
        title: "Váy nữ",
        status: "-10%",
        src: skirtFemale.CARO,
        price: 300000,
        rate: 4,
    },
    {
        id: 9,
        title: "Váy ngắn nữ",
        status: "New",
        src: skirtFemale.PINK,
        price: 250000,
        rate: 5,
    },
   
];
const renderListProduct = listProduct.map((item, i) => {
    return (
        <Grid item lg={4} sm={6} key={i + 1}>
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
        <section >
            <Container>
                <Grid container>{renderListProduct}</Grid>
            </Container>
        </section>
    );
};
export default TabProduct;
