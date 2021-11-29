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
        const animationName = ((i % 4) < 2)? "fade-right": "fade-left";
        const delayAnimate = 100 + Math.abs(i % 4 - 1.5) * 100 + ""; 
        return (
            <Grid item lg={3} md={4} sm={6} key={i + 1} data-aos={animationName} data-aos-delay={delayAnimate} data-aos-easing="ease-out">
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
                            <li className="tab-product__active">Tất cả</li>
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
