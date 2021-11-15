import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { FaHome } from "react-icons/fa";
import Grid from "@mui/material/Grid"
import "./BreadcrumbBlog.css";

function handleClick(event) {
    // event.preventDefault();
    console.info("You clicked a breadcrumb.");
}

export default function Breadcrumb() {
    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/home"
            onClick={handleClick}
            className="link"
        >
            <div className="breadcrumb-container">
                <FaHome fontSize="3rem" />
                <span style={{ paddingLeft: "1rem" }}>Trang chủ</span>
            </div>
        </Link>,
        <Typography key="3" color="text.primary">
            <span> Blog </span>
        </Typography>,
    ];

    return (
        <Grid container className="whole" >
            <Grid item lg={1} ></Grid>
            <Grid item lg={11} className="container">
               <Stack spacing={2}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="large" />}
                aria-label="breadcrumb"
                className="cart-breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
               </Stack>
        </Grid>
        </Grid>
    );
}
