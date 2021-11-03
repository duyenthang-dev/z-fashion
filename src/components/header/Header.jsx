import * as React from "react";
import "./header.css";
import Grid from "@mui/material/Grid";
import logo from "../../../src/assets/images/logo/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from "react-router-dom";

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
                    <nav className="header__menu">
                        <ul>
                            <li className="active">
                                <NavLink to="/home">Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/catalog">Cửa hàng</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                            <li className="dropdown">
                                <NavLink to="/blog">Điều hướng</NavLink>
                                <div className="space"></div>
                                <ul className="sub-menu">
                                    <li className="sub-menu--1">
                                        <NavLink to="/about-us">
                                            Về chúng tôi
                                        </NavLink>
                                    </li>
                                    <li className="sub-menu--2">
                                        <NavLink to="/cart">Giỏ hàng</NavLink>
                                    </li>
                                    <li className="sub-menu--3">
                                        <NavLink to="/whishlist">
                                            Mục ưu thích
                                        </NavLink>
                                    </li>
                                    <li className="sub-menu--4">
                                        <NavLink to="/product-detail">
                                            Mục ưu thích
                                        </NavLink>
                                    </li>
                                    <li className="sub-menu--5">
                                        <NavLink to="/checkout">
                                            Thanh toán
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/contact">Liên hệ</NavLink>
                            </li>
                        </ul>
                    </nav>
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
