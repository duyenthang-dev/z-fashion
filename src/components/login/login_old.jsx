
import "./../../utility/css/utility.css";
import React from "react";
import logo_img from './../../assets/images/logo/logo.png';
import fb_logo from  './../../assets/images/logo/fb.png';
import gg_logo from  './../../assets/images/logo/gg.png';
import "./login.css"



function Login_compo()  {
    return (
        
        <div className="Login_compo">

           
            

            <div className="Login_compo1"  >
                 <div className="login_page">
                     <div className="Login_frame">
                         <h1>Đăng Nhập</h1>
                         <input type="text" placeholder="username"/>
                        
                         <input type="password" placeholder="password"/>
                    
                         <button>Đăng nhập</button>
             
                         <a href="">Quên mật khẩu</a>
                    </div>
                     <div className="Another_way_to_login">
                        <h3>Hoặc có thể đăng nhập bằng</h3>
                        <a href="" target="_blank" >
                        <img src={fb_logo} alt="facebook" border="0" width="30px" height="30px" />
                        </a>
                        <a href="" target="_blank">
                            <img src={gg_logo} alt="google" border="0"width="30px" height="30px" />
                        </a>
                        <p>Chưa có tài khoản?</p>
                        <a href="">Đăng ký</a>

                    </div>
                </div >
            </div>
           
        </div>
    );
};
export default Login_compo;
