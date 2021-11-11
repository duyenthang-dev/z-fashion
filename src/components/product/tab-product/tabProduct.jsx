import "./tabProduct.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./../../../utility/css/utility.css";
import ProductItem from "./../productItem";

import {
    sweaterMale,
    shirtMale,
    khakiMale,
    sweaterFemale,
    skirtFemale,
} from "./../../../imageSource";
const listProduct = [
    {
        id: 1,
        title: "Áo thun nam chuột Mickey",
        status: "New",
        src: shirtMale.LARGE_1,
        price: 200000,
        rate: 4,
        desc: "Áo với form dáng thoải mái, với chất liệu vải 100% cotton dễ chịu khi mặc. Là trang phục hàng ngày hoàn hảo, dễ dàng kết hợp với mọi thứ",
    },
    {
        id: 2,
        title: "Áo len nam",
        status: "-30%",
        src: sweaterMale.LARGE_4,
        price: 400000,
        rate: 5,
        desc: "Với phong cách casual, áo thích hợp cho các hoạt động ngoại khóa ngoài trời, đi học, đi làm và đi chơi cùng gia đình hoặc bạn bè.",
    },
    {
        id: 3,
        title: "Áo len nữ",
        status: "New",
        src: sweaterFemale.LARGE_1,
        price: 450000,
        rate: 3,
        desc: "Với phong cách casual, áo thích hợp cho các hoạt động ngoại khóa ngoài trời, đi học, đi làm và đi chơi cùng gia đình hoặc bạn bè.",
    },
    {
        id: 4,
        title: "Áo thun nam Marvel",
        status: "",
        src: shirtMale.LARGE_6,
        price: 250000,
        rate: 4,
        desc: "Áo với form dáng thoải mái, với chất liệu vải 100% cotton dễ chịu khi mặc. Là trang phục hàng ngày hoàn hảo, dễ dàng kết hợp với mọi thứ",
    },
    {
        id: 5,
        title: "Quần khaki nam",
        status: "-10%",
        src: khakiMale.LARGE_2,
        price: 300000,
        rate: 4,
        desc: "Chiếc quần dài cho nam được thiết kế hiện đại và năng động, dễ dàng kết hợp với nhiều item khác nhau cho vẻ ngoài trẻ trung, mang lại cảm giác thoải mái, tiện dụng khi tham gia nhiều hoạt động",
    },
    {
        id: 6,
        title: "Váy ngắn nữ",
        status: "New",
        src: skirtFemale.LARGE_2,
        price: 250000,
        rate: 5,
        desc: " Với thiết kế tinh tế, trẻ trung, chất vải được nghiên cứu tạo cảm giác thoải mái nhất khi mặc. Set váy áo như món quà dành cho những cô gái đáng yêu trong mùa hè này. ",
    },
    {
        id: 7,
        title: "Váy ngắn nữ",
        status: "-25%",
        src: skirtFemale.LARGE_1,
        price: 300000,
        rate: 3,
        desc: " Với thiết kế tinh tế, trẻ trung, chất vải được nghiên cứu tạo cảm giác thoải mái nhất khi mặc. Set váy áo như món quà dành cho những cô gái đáng yêu trong mùa hè này. ",
    },
    {
        id: 8,
        title: "Áo len nam",
        status: "",
        src: sweaterMale.LARGE_2,
        price: 200000,
        rate: 3,
        esc: "Với phong cách casual, áo thích hợp cho các hoạt động ngoại khóa ngoài trời, đi học, đi làm và đi chơi cùng gia đình hoặc bạn bè.",
    },
];
const renderListProduct = listProduct.map((item, i) => {
    return (
        <Grid item lg={3} md={4} sm={6} key={i + 1}>
            <ProductItem
                key={item.id}
                id={item.id}
                title={item.title}
                status={item.status}
                src={item.src}
                price={item.price}
                rate={item.rate}
                desc={item.desc}
            />
        </Grid>
    );
});
const TabProduct = () => {
    return (
        <section className="tab-product mt-7">
            <Container>
                <Grid container className="mb-4">
                    <Grid item lg={4} md={4}>
                        <div className="tab-product__title">
                            <h3>Sản phẩm mới</h3>
                        </div>
                    </Grid>

                    <Grid item lg={8} md={8} className="tab-product__filter">
                        <ul>
                            <li className="active">Tẩt cả</li>
                            <li>Nam</li>
                            <li>Nữ</li>
                            <li>Phụ kiện</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid container>{renderListProduct}</Grid>
            </Container>
        </section>
    );
};
export default TabProduct;
