import "./register.css";
import React from "react";
import logo_img from "./../../assets/images/logo/logo.svg";
import fb_logo from "./../../assets/images/logo/fb.png";
import gg_logo from "./../../assets/images/logo/gg.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
const Register = () => {
    return (
        <Container maxWidth="lg">
            <div className="Signup_text">Đăng Ký</div>
            <Grid container>
                <Grid item lg={6}>
                    <div className="input_box">
                        <div className="input_box_left">
                            <h2 className="info">Số điện thoại</h2>
                            <h3 className="redflag">* Bắt buộc</h3>
                        </div>

                        <input className="input_box_right" type="text" />
                    </div>
                    <div className="input_box">
                        <div className="input_box_left">
                            <h2 className="info">Họ tên</h2>
                            <h3 className="redflag">* Bắt buộc</h3>
                        </div>

                        <input className="input_box_right" type="text" />
                    </div>
                    <div className="input_box">
                        <div className="input_box_left">
                            <h2 className="info">Email</h2>
                            <h3 className="redflag">* Bắt buộc</h3>
                        </div>

                        <input className="input_box_right" type="email" />
                    </div>
                </Grid>
                <Grid item lg={6}>
                    <div className="input_box">
                        <div className="input_box_left">
                            <h2 className="info">Tên đăng nhập</h2>
                            <h3 className="redflag">* Bắt buộc</h3>
                        </div>

                        <input className="input_box_right" type="text" />
                    </div>
                    <div className="input_box">
                        <div className="input_box_left">
                            <h2 className="info">Mật khẩu</h2>
                            <h3 className="redflag">* Bắt buộc</h3>
                        </div>

                        <input className="input_box_right" type="text" />
                    </div>
                </Grid>
                <div className="Regist_compo">
                    <button className="btn-signup">Đăng Ký</button>
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
                </div>
            </Grid>
        </Container>
    );
};
export default Register;
