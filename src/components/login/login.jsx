import "./../../utility/css/utility.css";
import React from "react";
import logo_img from "./../../assets/images/logo/logo.svg";
import fb_logo from "./../../assets/images/logo/fb.png";
import gg_logo from "./../../assets/images/logo/gg.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {Login} from './../../redux/action/userAction';
import "./login.css";
function LoginCompo() {
    // const dispatch = useDispatch();

    const [user, setUser] = useState({
        username: "",
        password: "",
    })
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const config = {
    //         headers: {
    //             "Content-Type": "text/plain;charset=utf-8",
    //         },
    //     };
    //     console.log(user);
    //     const jsonData = JSON.stringify(user);
    //     axios
    //         .post(
    //             "http://localhost/dev/backend_zfashion/sessions",
    //             jsonData,
    //             config
    //         )
    //         .then((response) => {
    //             const a = response.data;
    //             const a1 = a.data;
    //             localStorage.setItem("user", a1);
    //             dispatch(Login(a1));
    //         });
    // };
    return (
        <Container maxWidth="lg" className="mt-5 mb-6">
            <Grid container>
                <Grid item lg={5}>
                    <div className="logo_zf">
                        <img
                            src={logo_img}
                            alt="z_fashion"
                            width="60%"
                            height="60%"
                        />
                    </div>
                </Grid>
                <Grid item lg={7}>
                    <div className="login_page">
                        <div className="Login_frame">
                            <h1>Đăng Nhập</h1>

                            <form action="" >
                                <div className="login_box">
                                    <input
                                        className="username"
                                        type="text"
                                        placeholder="Email/Số điện thoại/User name"
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                username: e.target.value,
                                            })
                                        }
                                    />
                                    <br />
                                    <input
                                        className="pass"
                                        type="password"
                                        placeholder="Mật khẩu"
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <button className="login_text btn-login">
                                    Đăng nhập
                                </button>
                            </form>

                            <br />
                            <div className="lostpass">
                                <a className="lostpasstext" href="/">
                                    Quên mật khẩu
                                </a>
                            </div>
                        </div>
                        <hr />
                        <div className="Another_way_to_login">
                            <h3 className="login2text">
                                Hoặc có thể đăng nhập bằng
                            </h3>

                            <div className="login3rd">
                                <a className="fb_link" href="/" target="_blank">
                                    <img
                                        src={fb_logo}
                                        alt="facebook"
                                        border="0"
                                        width="100px"
                                        height="20px"
                                    />
                                </a>

                                <a className="gg_link" href="/" target="_blank">
                                    <img
                                        src={gg_logo}
                                        alt="google"
                                        border="0"
                                        width="100px"
                                        height="33px"
                                    />
                                </a>
                            </div>
                            <br />
                        </div>

                        <div className="SignUp">
                            <p className="signuptext">Chưa có tài khoản?</p>
                            <a className="signuplink" href="/register">
                                Đăng ký
                            </a>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
export default LoginCompo;
