import * as React from "react";
import "./header.css";
import Grid from "@mui/material/Grid";
import logo from "../../../src/assets/images/logo/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

// const mainNav = [
//     {
//         display: "Trang chủ",
//         path: "/",
//     },
//     {
//         display: "Sản phẩm",
//         path: "/catalog",
//     },
//     {
//         display: "Blog",
//         path: "/blog",
//     },
//     {
//         display: "Liên hệ",
//         path: "/contact",
//     },
// ];
function Header() {
    return (
        <div className="header">
            <Grid container>
                <Grid item xl={3} lg={2} className="item1">
                    <div className="header__logo">
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                </Grid>
                <Grid item xl={6} lg={7} className="item2">
                    <div className="header__menu">
                        <ul>
                            <li className="active">
                                <a href="/">Trang chủ</a>
                            </li>
                            <li>
                                <a href="/">Cửa hàng</a>
                            </li>
                            <li>
                                <a href="/">Blog</a>
                            </li>
                            <li>
                                <a href="/">Điều hướng</a>
                            </li>
                            <li>
                                <a href="/">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item lg={3} className="item3">
                    <div className="header__right">
                        <div className="header__auth">
                            <a href="/">Đăng nhập</a>
                            <span>/</span>
                            <a href="/">Đăng kí</a>
                        </div>

                        <div className="header__widget">
                            <div className="serch">
                                <SearchIcon fontSize="large" />
                            </div>
                            <div className="cart">
                                <Badge badgeContent={4} color="error">
                                    <ShoppingCartIcon fontSize="large" />
                                </Badge>
                            </div>
                            <div className="heart">
                                <Badge badgeContent={4} color="error">
                                    <FavoriteBorderIcon fontSize="large" />
                                </Badge>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className="container"></div>
        </div>
    );
}
export default Header;
