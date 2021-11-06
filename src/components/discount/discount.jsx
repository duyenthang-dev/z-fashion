import "./discount.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { DISCOUNT } from "./../../imageSource";
import "./../../utility/css/utility.css";
const Discount = () => {
    return (
        <div className="discount mt-15 ">
            <Container>
                <Grid container>
                    <Grid item lg={6}>
                        <div className="discount__poster">
                            <img src={DISCOUNT} alt="discount" width="100%" />
                        </div>
                    </Grid>
                    <Grid item lg={6}>
                        <div className="discount__text">
                            <div className="discount__title">
                                <span>DEAL HOT TRONG TUẦN</span>
                                <h2>Cardigan Collections</h2>
                                <h5>
                                    Sale <span>50%</span>
                                </h5>
                            </div>
                            <div className="discount__countdown">
                                <div className="countdown__item">
                                    <span>3</span>
                                    <p>ngày</p>
                                </div>
                                <div className="countdown__item">
                                    <span>6</span>
                                    <p>giờ</p>
                                </div>
                                <div className="countdown__item">
                                    <span>24</span>
                                    <p>phút</p>
                                </div>
                            </div>
                            <a href="/">Mua ngay</a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
export default Discount;
