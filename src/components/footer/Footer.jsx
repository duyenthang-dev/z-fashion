import "../footer/footer.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import logo from "../../../src/assets/images/logo/logo.png";
import payment1 from "./../../assets/images/payments/payment-1.png";
import payment2 from "./../../assets/images/payments/payment-2.png";
import payment3 from "./../../assets/images/payments/payment-3.png";
import payment4 from "./../../assets/images/payments/payment-4.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHeart } from "react-icons/fa";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
    return (
        <div className="footer">
            <Container maxWidth="lg">
                <Grid container className="footer-container">
                    <Grid item lg={4} md={6} sm={7} className="footer__about">
                        <div className="footer__logo">
                            <Link to={"/"}>
                                <img src={logo} alt="" />
                            </Link>
                        </div>

                        <p>
                            Với thông điệp "Refined Life", ZFashion mong muốn
                            đem đến cho khách hàng một lối sống tinh gọn bằng
                            các sản phẩm thời trang tinh tế.
                        </p>

                        <div className="footer__payments">
                            <Link to={"/"}>
                                <img src={payment1} alt="payment1" />
                            </Link>
                            <Link to={"/"}>
                                <img src={payment2} alt="payment2" />
                            </Link>
                            <Link to={"/"}>
                                <img src={payment3} alt="payment3" />
                            </Link>
                            <Link to={"/"}>
                                <img src={payment4} alt="payment4" />
                            </Link>
                        </div>
                    </Grid>

                    <Grid item lg={2} md={3} sm={5} className="footer__widget">
                        <p>Liên kết nhanh</p>
                        <ul>
                            <li><a href="/">Về chúng tôi</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Liên hệ</a></li>
                            <li><a href="/">FAQ</a></li>
                        </ul>
                    </Grid>

                    <Grid item lg={2} md={3} sm={4} className="footer__widget">
                        <p>Khách hàng</p>
                        <ul>
                            <li><a href="/">Tài khoản của tôi</a></li>
                            <li><a href="/">Đơn hàng</a></li>
                            <li><a href="/">Đặt hàng</a></li>
                            <li><a href="/">Yêu thích</a></li>
                        </ul>
                    </Grid>

                    <Grid item lg={4} md={8} sm={8} className="footer__newsletter">
                        <p>newletter</p>
                        <form action="#">
                            <input type="text" placeholder="Email" />
                            <button type="submit" className="btn">
                                Subscribe
                            </button>
                        </form>
                        <div className="footer__social">
                            <a href="https://www.facebook.com/duyenthang.5601/" className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCxslxvtPIbWwarp9P4LfMWg" className="youtube social">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>
                            <a href="https://www.youtube.com/" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.youtube.com/" className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item lg={12}>
                        <div className="footer__copyright">
                            <p>
                                Copyright &copy; Bản quyền thuộc về Z Fashion |
                                Được phát triển bởi &nbsp;
                                <a href="https://github.com/duyenthang-dev" target="_blank" rel="noreferrer">
                                    Dev Inside Team
                                </a>
                                <FaHeart style={{ color: "red", fontSize: "2rem" }}/>
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>

            
        </div>
    );
}
export default Footer;
