import * as React from "react";
import "./header.css";
import Grid from "@mui/material/Grid";
import logo from "../../../src/assets/images/logo/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./../../utility/css/utility.css";
import { searchProduct } from "./../../redux/action/productAction";
import { useHistory } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
function Header({ cart }) {
    const dispatch = useDispatch();
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let count = 0;
        cart.forEach(() => count++);
        setCartCount(count);
    }, [cart]);

    const [term, setTerm] = useState("");
    const [hidden, setHidden] = useState("hidden");
    const [toggle, setToggle] = useState("");
    const submitHandler = (e = null) => {
        if (e !== null) e.preventDefault();
        console.log(term);
        document.querySelector(".search-wrap form input").value = "";
        dispatch(searchProduct(term));
    };
    let history = useHistory();
    //* get user name
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const [click, setClick] = useState(false);
    useEffect(() => {
        console.log(username);
        setUsername(localStorage.getItem("username"));
    }, [click]);
    console.log(username);
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
                                <NavLink to="/home">Trang ch???</NavLink>
                            </li>
                            <li>
                                <NavLink to="/catalog" className="bar-effect">
                                    C???a h??ng
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" className="bar-effect">
                                    Blog
                                </NavLink>
                            </li>
                            <li className="dropdown">
                                <NavLink to="/blog">??i???u h?????ng</NavLink>
                                <div className="space"></div>
                                <ul className="sub-menu">
                                    <li className="sub-menu--1">
                                        <NavLink to="/about-us">
                                            V??? ch??ng t??i
                                        </NavLink>
                                    </li>
                                    <li className="sub-menu--2">
                                        <NavLink to="/cart">Gi??? h??ng</NavLink>
                                    </li>
                                    <li className="sub-menu--3">
                                        <NavLink to="/whishlist">
                                            M???c ??u th??ch
                                        </NavLink>
                                    </li>
                                    <li className="sub-menu--4">
                                        <NavLink to="/product-detail">
                                            Chi ti???t s???n ph???m
                                        </NavLink>
                                    </li>
                                    <li className="sub-menu--5">
                                        <NavLink to="/check-out">
                                            Thanh to??n
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/contact">Li??n h???</NavLink>
                            </li>
                        </ul>
                    </nav>
                </Grid>
                <Grid item lg={3} className="item3">
                    <div className="header__right">
                        <div className="header__auth">
                            {username !== null && (
                                <div>
                                    <Link to="/my-account">Xin ch??o, {username}</Link>
                                </div>
                            )}
                            {username === null && (
                                <div>
                                    <a href="/login">????ng nh???p</a>
                                    <span>/</span>
                                    <a href="/register">????ng k??</a>
                                </div>
                            )}
                        </div>

                        <div className="header__widget">
                            <div className="search ">
                                <GrClose
                                    fontSize="1.8rem"
                                    className={hidden}
                                    onClick={() => {
                                        setHidden("hidden");
                                        setToggle("");
                                    }}
                                    style={{ cursor: "pointer" }}
                                />
                                <BsSearch
                                    fontSize="1.8rem"
                                    className={toggle}
                                    onClick={() => {
                                        setHidden("");
                                        setToggle("hidden");
                                    }}
                                    style={{ cursor: "pointer" }}
                                />
                                <div className={`search-wrap ${hidden}`}>
                                    <form
                                        action="#"
                                        onSubmit={(e) => {
                                            setClick(true);
                                            submitHandler(e);
                                            history.push("/search");
                                        }}
                                    >
                                        <input
                                            type="text"
                                            placeholder="T??m ki???m ..."
                                            onChange={(e) => {
                                                setTerm(e.target.value);
                                            }}
                                        />
                                        <div className="close-search">
                                            <BsSearch
                                                fontSize="2rem"
                                                onClick={() => {
                                                    const value =
                                                        document.querySelector(
                                                            ".search-wrap form input"
                                                        ).value;
                                                    if (value !== "") {
                                                        console.log(
                                                            typeof value
                                                        );
                                                        setTerm(value);
                                                        submitHandler();
                                                        history.push("/search");
                                                    }
                                                }}
                                            />
                                        </div>
                                    </form>
                                </div>
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
