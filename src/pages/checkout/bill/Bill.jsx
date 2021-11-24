import React from "react";
import Grid from "@mui/material/Grid";
import ImageAvatars from "./paymentMethod";
import "./Bill.css";
import { useSelector } from "react-redux";
function Bill() {
    const cart = useSelector((state) => state.products.cart);
    console.log(cart);
    const totalPrice = cart.reduce((acc, item) =>acc + item.price*item.qty, 0);
    return (
        <div className="bill-frame">
            <div className="bill">
                <h1>HÓA ĐƠN</h1>
                <hr />
                <Grid container className="info-bill">
                    <Grid item >
                        <h2 className="h2_1">Sản Phẩm</h2>
                        <ol className="left-list">
                            {cart.map((item, idx) => {
                                return <li key={idx}>{item.title} x {item.qty}</li>;
                            })}
                        </ol>
                    </Grid>
                    <Grid item >
                        <h2 className="h2_2">Tổng</h2>
                        <ul className="right-list">
                            {cart.map((item, idx) => {
                                return <li key={idx}>{(item.price*item.qty).toLocaleString("it-IT", {style: "currency",currency: "VND",})}</li>;
                            })}
                        </ul>
                    </Grid>
                </Grid>
                <hr />
                <Grid container className="info-bill">
                    <Grid items>
                        <ul className="left-list">
                            <li>
                                <b>Tổng</b>
                            </li>
                            <li>
                                <b>Giảm giá</b>
                            </li>
                            <li>
                                <b>Còn</b>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item>
                        <ul className="right-list price">
                            <li>{totalPrice.toLocaleString("it-IT", {style: "currency",currency: "VND",})}</li>
                            <li>{(0).toLocaleString("it-IT", {style: "currency",currency: "VND",})}</li>
                            <li>
                                <b>{totalPrice.toLocaleString("it-IT", {style: "currency",currency: "VND",})}</b>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
                <hr />
                <ImageAvatars />
            </div>
        </div>
    );
}

export default Bill;
