import "./shopBreadCrumb.css";

import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Grid from "@mui/material/Grid";

function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
}

export default function ShopBreadCrumb() {
    const breadcrumbs = [
        <Link
            style={{ fontSize: "2rem" }}
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            onClick={handleClick}
        >
            Home
        </Link>,
        <Typography style={{ fontSize: "2rem" }} key="3" color="text.primary">
            Shop
        </Typography>,
    ];

    return (
        <div className="breadcrumb">
            <Container maxWidth="lg">
                <Grid>
                    <Stack spacing={2}>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                </Grid>
            </Container>
        </div>
    );
}
