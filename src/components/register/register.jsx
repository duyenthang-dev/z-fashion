import './register.css';
import React from "react";
import logo_img from "./../../assets/images/logo/logo.svg";
import fb_logo from "./../../assets/images/logo/fb.png";
import gg_logo from "./../../assets/images/logo/gg.png";


const Register = () =>{
    return (
        <div className="Regist_compo">
                <div className="Signup_text">Đăng Ký</div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="Info_frame">

                        <div className="Info_frame_left">


                                {/* INPUT_BOX_SPLIT */}

                                <div className="input_box">
                                        <div className="input_box_left">
                                                <h2 className="info">Số điện thoại</h2>
                                                <h3 className="redflag">* Bắt buộc</h3>
                                        </div>

                                        <input className="input_box_right" type="text" />
                                </div>

                                {/* INPUT_BOX_SPLIT */}
                                
                                <div className="input_box">
                                        <div className="input_box_left">
                                                <h2 className="info">Tên đăng nhập</h2>
                                                <h3 className="redflag">* Bắt buộc</h3>
                                        </div>

                                        <input className="input_box_right" type="text" />
                                </div>

                                {/* INPUT_BOX_SPLIT */}

                                <div className="input_box">
                                        <div className="input_box_left">
                                                <h2 className="info">Mật khẩu</h2>
                                                <h3 className="redflag">* Bắt buộc</h3>
                                        </div>

                                        <input className="input_box_right" type="text" />
                                </div>

                                {/* INPUT_BOX_SPLIT */}

                                <div className="input_box">
                                        <div className="input_box_left">
                                                <h2 className="info">Tên</h2>
                                                <h3 className="redflag">* Bắt buộc</h3>
                                        </div>

                                        <input className="input_box_right" type="text" />
                                </div>

                        </div>










                        <div className="Info_frame_right">

                                         {/* INPUT_BOX_SPLIT */}

                                 <div className="input_box">
                                        <div className="input_box_left">
                                                <h2 className="info">Số điện thoại</h2>
                                                <h3 className="redflag">* Bắt buộc</h3>
                                        </div>

                                        <input className="input_box_right" type="text" />
                                </div>

                                {/* INPUT_BOX_SPLIT */}
                                
                                <div className="input_box">
                                        <div className="input_box_left">
                                                <h2 className="info">Tên đăng nhập</h2>
                                                <h3 className="redflag">* Bắt buộc</h3>
                                        </div>

                                        <input className="input_box_right" type="text" />
                                </div>

                                {/* INPUT_BOX_SPLIT */}

                                <div className="input_box">
                                        <div className="input_box_left">
                                                <h2 className="info">Mật khẩu</h2>
                                                <h3 className="redflag">* Bắt buộc</h3>
                                        </div>

                                        <input className="input_box_right" type="text" />
                                </div>

                                {/* INPUT_BOX_SPLIT */}

                                <div className="input_box">
                                        <div className="input_box_left">
                                                <h2 className="info">Tên</h2>
                                                <h3 className="redflag">* Bắt buộc</h3>
                                        </div>

                                        <input className="input_box_right" type="text" />
                                </div>

                        </div>
                        



                </div>
                <div className="Condition"></div>
                <button className="Sign_up_text">Đăng nhập</button>
                <hr />
                <div className="Another_way_to_login">Hoặc có thể đăng ký bằng</div>

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

                    <div className="LoginIn">
                    <p className="LoginIn_text">Đã có tài khoản?</p>
                    <a className="LoginIn_link" href="/">Đăng nhập</a>
                </div>

        </div>
    )
}
export default Register;