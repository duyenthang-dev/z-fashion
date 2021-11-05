import "./banner.css";
import "./../../utility/css/utility.css";
import "./../../imageSource";
import { Container, Grid } from "@mui/material";
import { bannerImg } from "./../../imageSource";
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}
let list = [];
for (let i = 0; i < 3; i++) {
    list.push(
        <div className="banner__slider" key={i}>
            <div className="banner__item">
                <span>Bộ sưu tập thu đông</span>
                <h1>The autumn soul</h1>
                <a href="/">
                    Xem ngay
                </a>
            </div>
        </div>
    );
}
const Banner = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <section
            className="banner mt-10"
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <Container maxWidth="lg" style={{ display: "flex" }}>
                <Grid
                    container
                    style={{ justifyContent: "space-around", margin: "auto 0" }}
                >
                    <Grid item xl={7} lg={8} className="banner-container">
                        <Slider {...settings}>{list}</Slider>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Banner;
