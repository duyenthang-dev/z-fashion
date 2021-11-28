import "./register.css";
import React from "react";
import fb_logo from "./../../assets/images/logo/fb.png";
import gg_logo from "./../../assets/images/logo/gg.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { signUp } from "./../../redux/action/userAction";
import axios from 'axios';
const Register = (e) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: "",
        fullname: "",
        email: "",
        password: "",
        phoneNumber: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "text/plain",
            },
        };
        const jsonData = JSON.stringify(user);
        console.log(user);
        axios
            .post(
                "http://localhost/dev/backend_zfashion/users",
                jsonData,
                config
            )
            .then((response) => {
                const a = response.data;
                console.log(a.data);
                dispatch(signUp(a.data));
            });
    };

    return (
        <Container maxWidth="lg" className="mt-5">
            <div className="Signup_text">Đăng Ký</div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container className="mt-5" spacing={10}>
                    <Grid item lg={6}>
                        <div className="input_box mt-3">
                            <div className="input_box_left">
                                <h2 className="info">Số điện thoại</h2>
                                <h3 className="redflag">* Bắt buộc</h3>
                            </div>

                            <input
                                className="input_box_right"
                                type="text"
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        phoneNumber: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="input_box mt-3">
                            <div className="input_box_left">
                                <h2 className="info">Họ tên</h2>
                                <h3 className="redflag">* Bắt buộc</h3>
                            </div>

                            <input
                                className="input_box_right"
                                type="text"
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        fullname: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="input_box mt-3">
                            <div className="input_box_left">
                                <h2 className="info">Email</h2>
                                <h3 className="redflag">* Bắt buộc</h3>
                            </div>

                            <input
                                className="input_box_right"
                                type="email"
                                onChange={(e) =>
                                    setUser({ ...user, email: e.target.value })
                                }
                            />
                        </div>
                    </Grid>
                    <Grid item lg={6}>
                        <div className="input_box mt-3">
                            <div className="input_box_left">
                                <h2 className="info">Tên đăng nhập</h2>
                                <h3 className="redflag">* Bắt buộc</h3>
                            </div>

                            <input
                                className="input_box_right"
                                type="text"
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        username: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="input_box mt-3">
                            <div className="input_box_left">
                                <h2 className="info">Mật khẩu</h2>
                                <h3 className="redflag">* Bắt buộc</h3>
                            </div>

                            <input
                                className="input_box_right"
                                type="text"
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <button className="btn-signup" type="submit">
                            Đăng Ký
                        </button>
                    </Grid>
                </Grid>
            </form>

            <Grid container>
                <Grid
                    item
                    className="Regist_compo mt-5"
                    style={{ margin: "0 auto" }}
                >
                    <hr className="hr_signin"></hr>
                    <h3>Hoặc có thể đăng kí bằng</h3>
                    <div className="login3rd">
                        <a className="fb_link" href="/" target="_blank">
                            <img
                                src={fb_logo}
                                alt="facebook"
                                border="0"
                                width="100%"
                                height="100%"
                            />
                        </a>
                        <a className="gg_link" href="/" target="_blank">
                            <img
                                src={gg_logo}
                                alt="google"
                                border="0"
                                width="100%"
                                height="100%"
                            />
                        </a>
                    </div>

                    <div className="LoginIn">
                        <p className="Login_text">Đã có tài khoản?</p>
                        <a className="Login_link" href="/login">
                            Đăng nhập
                        </a>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Register;
