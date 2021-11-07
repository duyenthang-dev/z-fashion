import React from "react";
import Grid from "@mui/material/Grid";
import ImageAvatars from "./paymentMethod";
import "./Bill.css";

function Bill() {
    return (
        <div className="bill-frame">
            <div className="bill">
                <h1>HÓA ĐƠN</h1>
                <hr />
                <Grid container>
                    <Grid item xs={4}>
                        <h2>Sản Phẩm</h2>
                        <ol>
                            <li>Bag</li>
                            <li>Shirt</li>
                            <li>Jean</li>
                        </ol>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <h2>Tổng</h2>
                        <ul>
                            <li>200.000 đ</li>
                            <li>200.000 đ</li>
                            <li>200.000 đ</li>
                        </ul>
                    </Grid>
                </Grid>
                <hr />
                <Grid container>
                    <Grid item xs={4}>
                        <ul>
                            <li>Tổng</li>
                            <li>Tham gia</li>
                            <li>Còn</li>
                        </ul>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
                <hr />
                <ImageAvatars />
            </div>
        </div>
    );
}

export default Bill;
