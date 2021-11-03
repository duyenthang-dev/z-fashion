import heroImage from "./../../assets/images/hero-slider/1.png";
import saleImage from "./../../assets/images/hero-slider/2.png";
import "./heroSlider.css";
import "./../../utility/css/utility.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
const HeroSlider = () => {
    return (
        <div className="hero">
            <Container maxWidth="lg" className="hero-container">
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} className="align-self">
                        <div className="hero__content hero-animate">
                            <span className="category">Ưu đãi tháng 10</span>
                            <h2 className="title-1">Giảm giá tới</h2>
                            <h2 className="title-2">50%</h2>
                            <a href="/" className="btn btn-l">
                                Mua ngay
                            </a>
                        </div>
                    </Grid>

                    <Grid item lg={7} md={7} sm={7}>
                        <div className="hero__show-case position-relative">
                            <div className="hero__image">
                                <img src={heroImage} alt="hero" />
                            </div>
                            <div className="hero__sale">
                                <div className="hero__sale__content">
                                    <div className="title">Áo khoác nữ</div>
                                    <div className="price">300000 VNĐ</div>
                                    <a href="/" className="shop-link">Mua ngay</a>
                                </div>
                                <div className="hero__sale__img">
                                    <img src={saleImage} alt="sale" />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default HeroSlider;
