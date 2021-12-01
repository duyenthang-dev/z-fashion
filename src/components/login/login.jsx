import "./../../utility/css/utility.css";
import React from "react";
import logo_img from "./../../assets/images/logo/logo.svg";
import fb_logo from "./../../assets/images/logo/fb.png";
import gg_logo from "./../../assets/images/logo/gg.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./login.css";

function LoginCompo() {
    let history = useHistory();
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        const config = {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        };
        axios
            .post("http://localhost/dev/backend_zfashion/sessions",JSON.stringify(user),config)
            .then((response) => {
                console.log(response);
                if (response?.data?.data?.access_token) {
                    localStorage.setItem("access_token",response.data?.data?.access_token);
                }
                if (response?.data?.data?.refresh_token) {
                    localStorage.setItem("refresh_token",response.data?.data?.refresh_token);
                }
                localStorage.setItem('username', response.data?.data?.username);
                history.push('/home');
                // window.location.reload();
            })
            .catch((error) => {
                console.log(error?.response?.data.success);
            });
    };
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

                            <form
                                onSubmit={(e) => {
                                    handleSubmit(e);
                                }}
                            >
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
                            <Link className="signuplink" to="/register">
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
export default LoginCompo;
