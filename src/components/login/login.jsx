import "./../../utility/css/utility.css";
import React from "react";
import logo_img from "./../../assets/images/logo/logo.svg";
import fb_logo from "./../../assets/images/logo/fb.png";
import gg_logo from "./../../assets/images/logo/gg.png";
import "./login.css";

function Login_compo() {
    return (
        <div className="Login_compo">
            <div className="logo_zf">
                <img
                    src={logo_img}
                    alt="z_fashion"
                    width="628px"
                    height="320px"
                />
            </div>

            <div className="login_page">
                <div className="Login_frame">
                    <h1>Đăng Nhập</h1>

                    <div className="login_box">
                        <input
                            className="username"
                            type="text"
                            placeholder="    Email/Số điện thoại/User name"
                        />
                        <br />
                        <input
                            className="pass"
                            type="password"
                            placeholder="    Mật khẩu"
                        />
                    </div>

                    <button className="login_text">Đăng nhập</button>

                    <br />
                    <div className="lostpass">
                        <a className="lostpasstext" href="">
                            Quên mật khẩu
                        </a>
                    </div>
                </div>
                <hr />
                <div className="Another_way_to_login">
                    <h3 className="login2text">Hoặc có thể đăng nhập bằng</h3>

                    <div className="login3rd">
                        <a className="fb_link" href="" target="_blank">
                            <img
                                src={fb_logo}
                                alt="facebook"
                                border="0"
                                width="150px"
                                height="29.1px"
                            />
                        </a>

                        <a className="gg_link" href="" target="_blank">
                            <img
                                src={gg_logo}
                                alt="google"
                                border="0"
                                width="150px"
                                height="50px"
                            />
                        </a>
                    </div>
                    <br />
                </div>

                <div className="SignUp">
                    <p className="signuptext">Chưa có tài khoản?</p>
                    <a className="signuplink" href="">
                        Đăng ký
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Login_compo;
