import React from 'react';
import './CusInfo.css';
import Grid from '@mui/material/Grid';


function Cusinfo() {
    return (
        <div className='cusinfo'>
            <div className="top">
                <div className="lin"></div>
                <h2>THÔNG TIN KHÁCH HÀNG</h2>
            </div>
            <hr />
            <div className="form"> 
                <Grid container>
                    <Grid item xs={12}>
                        <form>
                            <label htmlFor="name">Họ và tên <span className="required">*</span><br />
                                <input type="text" placeholder="Nhập họ và tên" id="name" name="name" required />
                            </label>
                            <Grid container>
                                <Grid item lg={5.5} md={5} xs={12}>
                                    <label htmlFor="phone">Điện thoại <span className="required">*</span><br />
                                        <input type="text" placeholder="Nhập số điện thoại" id="phone" name="phone" required />
                                    </label>
                                </Grid>
                                <Grid item lg={1} md={2}>
                                </Grid>
                                <Grid item lg={5.5} md={5} xs={12}>
                                    <label htmlFor="email">Email <span className="required">*</span><br />
                                        <input type="text" placeholder="Nhập email" id="email" name="email" required />
                                    </label>
                                </Grid>
                            </Grid>
                            <label htmlFor="address">Địa chỉ <span className="required">*</span><br />
                                <input type="text" placeholder="Nhập địa chỉ giao hàng" id="address" name="address" required />
                            </label>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Cusinfo;