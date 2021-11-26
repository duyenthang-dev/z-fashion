import "./tabProduct.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./../../../utility/css/utility.css";
import ProductItem from "./../productItem";
import productApi from "./../../../api/productApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllProduct } from "./../../../redux/action/productAction";

const TabProduct = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const fetchProduct = async () => {
        const response = await productApi.getAll();
        const data = response.data.data.products.map((item) => {
            return {
                id: Number(item.id),
                title: item.title,
                status: item.status,
                imgSrc: item.imgSrc,
                price: Number(item.price),
                color: item.color.split(","),
                size: item.size.split(","),
                desc: item.description,
                rate: Number(item.rate),
            };
        });
        dispatch(setAllProduct(data));
    };
    useEffect(() => {
        fetchProduct();
    }, []);
    // console.log(products);
    const renderListProduct = products.map((item, i) => {
        return (
            <Grid item lg={4} md={6} sm={12} key={i + 1}>
                <ProductItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    status={item.status}
                    src={item.imgSrc}
                    price={item.price}
                    rate={item.rate}
                    color={item.color}
                    size={item.size}
                    desc={item.desc}
                />
            </Grid>
        );
    });
    return (
        <section >
            <Container>
                <Grid container>{renderListProduct}</Grid>
            </Container>
        </section>
    );
};

export default TabProduct;
