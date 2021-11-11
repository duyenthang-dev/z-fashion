import React from "react";
import "./ShopCart.css";
import Breadcrumb from "./breadcrumb";
import "./breadcrumb.css";
import "./../../utility/css/utility.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { skirtFemale } from "./../../imageSource";
import { FaTimes } from "react-icons/fa";
function ShopCart() {
    return (
        <>
            <div className="breadcrumb pt-5">
                <Breadcrumb />
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
                                    <tbody>
                                        <tr>
                                            <th className="product-thumbnail">
                                                <a
                                                    href="/"
                                                    className="product-link"
                                                >
                                                    <img
                                                        src={skirtFemale.CARO}
                                                        alt="váy"
                                                        width="100%"
                                                    />
                                                </a>
                                            </th>
                                            <th className="product-name">
                                                <a href="/product/1">
                                                    Lorem ipsum jacket
                                                </a>
                                                <div class="cart-item-variation">
                                                    <span>Color: white</span>
                                                    <span>Size: x</span>
                                                </div>
                                            </th>
                                            <th className="product-price">
                                                <span class="amount old">
                                                    150.000 VNĐ
                                                </span>
                                                <span class="amount">
                                                    100.000 VNĐ
                                                </span>
                                            </th>
                                            <th className="product-quantity">
                                                <div className="shopcart-plus-minus">
                                                    <div className="decrease">
                                                        -
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="quantity-box"
                                                        name="qtybutton"
                                                        value="1"
                                                    />
                                                    <div className="increase">
                                                        +
                                                    </div>
                                                </div>
                                            </th>
                                            <th className="product-subtotal">
                                                300.000 VNĐ
                                            </th>
                                            <th className="product-remove">
                                                <button>
                                                    <FaTimes fontSize="2rem" />
                                                </button>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container className="pt-5">
                        <Grid item lg={12}>
                            <div className="cart-shipping-action">
                                <div className="cart-shipping__continue">
                                    <a href="/catalog">Tiếp tục mua</a>
                                </div>
                                <div className="cart-shipping__update">
                                    <button>Cập nhật giỏ</button>
                                    <a href="/">Xoá tất cả</a>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
}

export default ShopCart;
