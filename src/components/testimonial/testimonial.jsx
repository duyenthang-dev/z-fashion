import "./testimonial.css";
import TestiCard from "./testiCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { avatar } from "./../../imageSource";
import './../../utility/css/utility.css';
let list = [
    {
        rate: 5,
        content:
            "Mua hàng ở z fashion thực sự rất tốt. Nhân viên phục vụ chu đáo, hỗ trợ tận tình, chất lượng hoàn thiện sản phẩm tốt.Vải dày nhưng không nóng, không bị phai màu khi sử dụng. Sẽ còn ủng hộ shop nhiều hơn nữa",
        avatar: avatar.AVT_1,
        name: "Hà Thị B",
        info: "20 tuổi, sống tại TPHCM",
    },
    {
        rate: 4,
        content:
            "Mua hàng ở z fashion thực sự rất tốt. Nhân viên phục vụ chu đáo, hỗ trợ tận tình, chất lượng hoàn thiện sản phẩm tốt.Vải dày nhưng không nóng, không bị phai màu khi sử dụng. Sẽ còn ủng hộ shop nhiều hơn nữa",
        avatar: avatar.AVT_2,
        name: "Nguyễn Văn A",
        info: "22 tuổi, sống tại Hà Nội",
    },
    {
        rate: 5,
        content:
            "Mua hàng ở z fashion thực sự rất tốt. Nhân viên phục vụ chu đáo, hỗ trợ tận tình, chất lượng hoàn thiện sản phẩm tốt.Vải dày nhưng không nóng, không bị phai màu khi sử dụng. Sẽ còn ủng hộ shop nhiều hơn nữa",
        avatar: avatar.AVT_3,
        name: "Nguyễn THị C",
        info: "26 tuổi, sống tại Đà Nẵng",
    },
];
const renderListTesti = list.map((item, index) => {
    return (
        <Grid item lg={4} key={index} >
            <TestiCard
                rating={item.rate}
                content={item.content}
                avatar={item.avatar}
                name={item.name}
                info={item.info}
            />
        </Grid>
    );
});
const Testimonial = () => {
    return (
        <section className="testimonial mt-15 ">
            <Container>
                <Grid container>
                    <Grid item>
                        <div className="testi__title">
                            <h3>Nhận xét của khách hàng</h3>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={3} className="testi__list">
                    {renderListTesti}
                </Grid>
            </Container>
        </section>
    );
};

export default Testimonial;
