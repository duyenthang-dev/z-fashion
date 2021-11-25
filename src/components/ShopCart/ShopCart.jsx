import React from "react";
import "./ShopCart.css";
import Breadcrumb from "./breadcrumb";
import "./breadcrumb.css";
import "./../../utility/css/utility.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CartItem from "./cartItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Discount from "../ShopCart_discount/ShopCart_discount";
// import { CSSTransition } from "react-transition-group";

function ShopCart({ cart }) {
    //* calculate total price
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let sum = 0;
        cart.forEach((item) => {
            sum += item.qty * item.price;
        });
        setTotalPrice(sum);
    }, [cart]);
    //* toast
    const [transition, setTransition] = React.useState(undefined);
    const [openToast, setOpenToast] = React.useState(false);
    const handleClickToastSuccess = (Transition) => {
        setTransition(() => Transition);
        setOpenToast(true);
    };
    const handleCloseToastSuccess = (event, reason) => {
        console.log("close");
        if (reason === "clickaway") {
            return;
        }
        setOpenToast(false);
    };
    //* render list item cart
    const renderListCart = cart.map((item, i) => {
        return (
            <CartItem
                key={item.id}
                id={item.id}
                imgSrc={item.imgSrc}
                title={item.title}
                price={item.price}
                color={item.color}
                size={item.size}
                qty={item.qty}
                subtotal={item.qty * item.price}
                openToastSuccess={handleClickToastSuccess}
            />
        );
    });

    return (
        <>
            <div className="breadcrumb pt-5">
                <Container maxWidth="lg">
                    <Breadcrumb />
                </Container>
            </div>
            <section className="cart-container">
                <Container className="cart-wrapper">
                    <h3>Giỏ hàng của bạn</h3>
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <div className="shop-cart__table table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Ảnh</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Đơn giá</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th>Xoá</th>
                                        </tr>
                                    </thead>
                                    <tbody>{renderListCart}</tbody>
                                </table>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container className="pt-5">
                        <Grid item lg={12}>
                            <div className="cart-shipping-action">
                                <div className="cart-shipping__continue">
                                    <Link to="/catalog">Tiếp tục mua</Link>
                                </div>
                                <div className="cart-shipping__update">
                                    <button>Cập nhật giỏ</button>
                                    <Link to="/">Xoá tất cả</Link>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <Container className="mt-5">
                    <Discount totalPrice={totalPrice} />
                </Container>
            </section>

            <Snackbar
                open={openToast}
                autoHideDuration={3000}
                onClose={handleCloseToastSuccess}
                TransitionComponent={transition}
            >
                <Alert
                    onClose={handleCloseToastSuccess}
                    severity="success"
                    sx={{ width: "100%" }}
                    fontSize="3rem"
                >
                    <p
                        style={{
                            fontSize: "1.5rem",
                            fontFamily: '"Poppins", sans-serif',
                            fontWeight: "500",
                        }}
                    >
                        Đã xoá sản phẩm khỏi giỏ hàng
                    </p>
                </Alert>
            </Snackbar>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.products.cart,
    };
};
export default connect(mapStateToProps)(ShopCart);
