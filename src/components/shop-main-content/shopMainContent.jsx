import "./shopMainContent.css"

import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ShopLeftBar from "../shop-left-bar/shopLeftBar"
import TabProduct from "./tabProduct/tabProduct";



function shopMainContent() 
{
    return (
        <section className="shop spad">
            <Container>
                <Grid container spacing={0} >
                    <Grid item xs={4} md={3} lg={3} className="left__side">
                        <ShopLeftBar />
                    </Grid>
                    <Grid item xs={8} md={9} lg={9} className="main__menu">
                        <TabProduct />
                    </Grid>
                </Grid>
            </Container>

        </section>
        

    );
}

export default shopMainContent;