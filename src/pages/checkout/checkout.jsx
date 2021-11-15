
import React, { Fragment } from 'react';
import './checkout.css';
import Header from "./../../container/header/index";
import Footer from "./../../container/footer/index";
import Cusinfo from './CusInfo/CusInfo';
import Bill from './bill/Bill';
import CustomSeparator from './homenav/CustomSeparator';
import Grid from '@mui/material/Grid';

function Checkout() {
    return (
        <Fragment>
            <Header />
            <Grid container>
                <Grid item lg={1} md={1}></Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <CustomSeparator />
                    <Cusinfo />
                </Grid>
                <Grid item lg={1} md={1}></Grid>
                <Grid item lg={3} md={4} xs={12}>
                    <Bill />
                </Grid>
            </Grid>
            <Footer />
        </Fragment>
    )
}

export default Checkout;
