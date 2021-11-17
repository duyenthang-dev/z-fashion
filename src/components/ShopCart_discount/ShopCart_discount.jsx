import React from "react";
import Grid from "@mui/material/Grid";
import "./ShopCart_discount.css";
import { Link } from "react-router-dom";
function Discount(props) {
    return (
        <div>
            <Grid container spacing={10}>
                <Grid item className="discount-cart" lg={6} md={6} sm={4} xs={4}>
                    <div className="discount-cart-wrapper">
                        <p>Mã giảm giá</p>
                        <form action="#">
                            <input type="text" placeholder="enter code" />
                            <button type="submit" className="btn">
                                <span>Áp dụng</span>
                            </button>
                        </form>
                    </div>
                </Grid>
                <Grid item className="bill-cart" lg={6} md={6} sm={4} xs={4}>
                    <div className="bill-cart-wrapper">
                        <div className="title">tóm tắt</div>
                        <div className="price">
                            <p>
                                <span>tạm tính</span>
                                <span className="span2">
                                    {props.totalPrice.toLocaleString("it-IT", {style: "currency",currency: "VND",})}
                                </span>
                            </p>
                            <p>
                                <span>giảm giá</span>
                                <span className="span2">0 VND</span>
                            </p>
                            <p>
                                <span>tổng cộng</span>
                                <span className="span2">
                                    {props.totalPrice.toLocaleString("it-IT", {style: "currency",currency: "VND",})}
                                </span>
                            </p>
                        </div>
                        <div>
                            <button type="submit" className="btn">
                                <Link className="link" to="/check-out">
                                    <span>Thanh toán</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Discount;
