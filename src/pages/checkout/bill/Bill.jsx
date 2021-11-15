import React from 'react';
import Grid from '@mui/material/Grid';
import ImageAvatars from './paymentMethod';
import './Bill.css';

function Bill() {
    return (
        <div className="bill-frame">
            <div className="bill">
                <h1>HÓA ĐƠN</h1>
                <hr />
                <Grid container>
                    <Grid item xs={4}>
                        <h2>Sản Phẩm</h2>
                        <ol className="left-list">
                            <li>Bag</li>
                            <li>Shirt</li>
                            <li>Jean</li>
                        </ol>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <h2>Tổng</h2>
                        <ul className="right-list">
                            <li> <b>200.000 đ</b> </li>
                            <li> <b>200.000 đ</b> </li>
                            <li> <b>200.000 đ</b> </li>
                        </ul>
                    </Grid>
                </Grid>
                <hr />
                <Grid container>
                    <Grid item xs={4}>
                        <ul className="left-list">
                            <li> <b>Tổng</b> </li>
                            <li> <b>Giảm giá</b> </li>
                            <li> <b>Còn</b> </li>
                        </ul>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <ul className="right-list price">
                            <li>600.000 đ</li>
                            <li>100.000 đ</li>
                            <li> <b>500.000 đ</b> </li>
                        </ul>
                    </Grid>
                </Grid>
                <hr />
                <ImageAvatars />
            </div>
        </div>
    )
}

export default Bill;