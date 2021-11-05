import "./banner.css";
import "./../../utility/css/utility.css";
import "./../../imageSource";
import { Container, Grid } from "@mui/material";
import { bannerImg } from "./../../imageSource";
const Banner = () => {
    return (
        <section className="banner mt-10" style={{backgroundImage: `url(${bannerImg})`}} >
            <Container>
                <Grid container>
                    <Grid item xl={7} lg={8}>
                        <div className="banner__slider">
                            <div className="banner__item">
                                <span>Bộ sưu tập thu đông</span>
                                <h1>The autumn soul</h1>
                                <a href="/" className = "active">Xem ngay</a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Banner;
