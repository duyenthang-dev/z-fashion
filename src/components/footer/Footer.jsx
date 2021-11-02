import "../footer/footer.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import logo from "../../../src/assets/images/logo/logo.png";
import paymemnt1 from "../../src/assets/images/payments/payment-1.png";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <Container maxWidth="lg">
                <Grid container sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
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
                                <img src={logo} alt="paymemnt1" />
                            </Link>
                        </div>
                    </Grid>

                    <Grid
                        item
                        lg={2}
                        md={3}
                        sm={5}
                        className="footer__widget"
                    ></Grid>

                    <Grid
                        item
                        lg={2}
                        md={3}
                        sm={4}
                        className="footer__widget"
                    ></Grid>

                    <Grid
                        item
                        lg={4}
                        md={8}
                        sm={8}
                        className="footer__newsletter"
                    ></Grid>
                </Grid>
            </Container>
        </div>
    );
}
export default Footer;
