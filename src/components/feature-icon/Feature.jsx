import { Container, Grid } from "@mui/material";
import { FaCar, FaRegMoneyBillAlt, FaHeadphones } from "react-icons/fa";
import { MdSupport } from "react-icons/md";
import "./feature.css";
import "./../../utility/css/utility.css";
const Feature = () => {
    return (
        <div className="features">
            <Container maxWidth="lg">
                <Grid container spacing={2} className="features-container">
                    <Grid item lg={3} md={4} sm={6}>
                        <div className="features__service-item">
                            <FaCar
                                style={{ color: "#ca1515", fontSize: "4rem" }}
                                className="align-self"
                            />
                            <div className="fsi__description">
                                <h6>Miễn phí vận chuyển</h6>
                                <p>Cho đơn hàng từ 299k</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6}>
                        <div className="features__service-item">
                            <FaRegMoneyBillAlt
                                style={{ color: "#ca1515", fontSize: "4rem" }}
                                className="align-self"
                            />
                            <div className="fsi__description">
                                <h6>Hoàn tiền trong 7 ngày</h6>
                                <p>Nếu có lỗi từ nhà sản xuất</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6}>
                        <div className="features__service-item">
                            <MdSupport
                                style={{color: "#ca1515",fontSize: "4rem"}}
                                className="align-self"
                            />
                            <div className="fsi__description">
                                <h6>Phục vụ chuyên nghiệp</h6>
                                <p>Hỗ trợ khách hàng 24/7</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6}>
                        <div className="features__service-item">
                            <FaHeadphones
                                style={{color: "#ca1515", fontSize: "4rem"}}
                                className="align-self"
                            />
                            <div className="fsi__description">
                                <h6>Bảo mật</h6>
                                <p>Giao dịch an toàn</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Feature;
