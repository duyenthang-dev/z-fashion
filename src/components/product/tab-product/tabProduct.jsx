import "./tabProduct.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./../../../utility/css/utility.css";
import ProductItem from "./../productItem";
import { connect } from "react-redux";

const TabProduct = ({ productList }) => {
    const renderListProduct = productList.map((item, i) => {
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
                            <li className="tab-product__active">Tẩt cả</li>
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

const mapStateToProps = (state) => {
    return {
        productList: state.products.products,
    };
};
export default connect(mapStateToProps)(TabProduct);
