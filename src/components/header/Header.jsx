import * as React from "react";
import "./header.css";
import Grid from "@mui/material/Grid";
import logo from "../../../src/assets/images/logo/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import './../../utility/css/utility.css';
function Header({ cart }) {
    // console.log(cart);
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let count = 0;
        cart.forEach(() => count++);
        setCartCount(count);
    }, [cart]);

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
                            <li>
                                <NavLink to="/home">Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/catalog" className="bar-effect">Cửa hàng</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" className="bar-effect">Blog</NavLink>
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
                                            Chi tiết sản phẩm
                                        </NavLink>
                                    </li>
                                    <li className="sub-menu--5">
                                        <NavLink to="/check-out">
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
                            <a href="/login">Đăng nhập</a>
                            <span>/</span>
                            <a href="/register">Đăng kí</a>
                        </div>

                        <div className="header__widget">
                            <div className="serch">
                                <SearchIcon fontSize="large" />
                            </div>
                            <div className="cart">
                                <Link to="/cart">
                                    <Badge
                                        badgeContent={cartCount}
                                        color="error"
                                        showZero
                                    >
                                        <ShoppingCartIcon fontSize="large" />
                                    </Badge>
                                </Link>
                            </div>
                            <div className="heart">
                                <Link to="/whishlist">
                                    <Badge badgeContent={4} color="error">
                                        <FavoriteBorderIcon fontSize="large" />
                                    </Badge>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className="container"></div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        cart: state.products.cart,
    };
};
export default connect(mapStateToProps)(Header);
