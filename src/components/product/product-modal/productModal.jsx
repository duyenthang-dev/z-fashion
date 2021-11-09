import "./productModal.css";
import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
import React, { Component } from "react";
import { BsShare } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import { shirtMale } from "./../../../imageSource";
import ProductRating from "./../productRating";
let list = [];
for (let i = 0; i < 6; i++) {
    list.push(
        <div className="product-quickview-item" key={i}>
            <img
                src={shirtMale[`LARGE_${i + 1}`]}
                alt=""
                width="100%"
                height="100%"
            />
        </div>
    );
}
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
};

const ProductModal = ({ isShowing, hide }) => {
    return (
        <div
            className="modal overlay hidden backdrop"
            role="dialog"
            aria-modal="true"
            tabIndex="-1"
            style={{ display: "block" }}
        >
            <div className="modal-dialog" role="dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">x</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Grid container>
                            <Grid item lg={5} md={6} sm={12}>
                                <div className="product-large-img">
                                    <img
                                        src={shirtMale.LARGE_1}
                                        alt="large"
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                                <div className="product-quickview">
                                    <Slider {...settings}>{list}</Slider>
                                </div>
                            </Grid>
                            <Grid item lg={7} md={6} sm={12}>
                                <div className="product-details-content">
                                    <h2>Áo thun nam</h2>

                                    <div className="product-details__rating">
                                        <ProductRating
                                            ratingValue={4}
                                            size={"1.3rem"}
                                        />
                                        <div className="product-details__order">
                                            <span>40 reviews</span>
                                            <span>100 orders</span>
                                        </div>
                                    </div>
                                    <div className="product-details__desc">
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Iste
                                            minus assumenda consectetur
                                            reprehenderit deleniti facilis,
                                        </p>
                                    </div>
                                    <div className="prodcut-details__price">
                                        <span>300.000 VNĐ</span>
                                    </div>
                                    <div className="product-details__color">
                                        <span>Màu sắc:</span>
                                        <ul>
                                            <li className="dolly">
                                                <a href="/">dolly</a>
                                            </li>
                                            <li className="white">
                                                <a href="/">white</a>
                                            </li>
                                            <li className="navy">
                                                <a href="/">navy</a>
                                            </li>
                                            <li className="lisa">
                                                <a href="/">lisa</a>
                                            </li>
                                            <li className="orange">
                                                <a href="/">orange</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-details__size">
                                        <span>Size:</span>
                                        <ul>
                                            <li>
                                                <a href="/">S</a>
                                            </li>
                                            <li>
                                                <a href="/">M</a>
                                            </li>
                                            <li>
                                                <a href="/">L</a>
                                            </li>
                                            <li>
                                                <a href="/">XL</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-details__quantity">
                                        <span>Số lượng</span>
                                        <div className="cart-plus-minus">
                                            <div className="decrease">-</div>
                                            <input
                                                type="text"
                                                className="quantity-box"
                                                name="qtybutton"
                                                value="1"
                                            />
                                            <div className="increase">+</div>
                                        </div>
                                    </div>
                                    <div className="product-details__meta">
                                        <ul>
                                            <li>
                                                <span>Category: </span>
                                                <a href="/">Nam,</a>
                                                <a href="/">Áo thun</a>
                                            </li>
                                            <li>
                                                <span>Tag: </span>
                                                <a href="/">Fashion,</a>
                                                <a href="/">Nam</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-details__action">
                                        <div className="pro-details__add">
                                            <a href="/">Thêm vào giỏ</a>
                                        </div>
                                        <div className="pro-details__action">
                                            <a href="/">
                                                <FaRegHeart fontSize="2rem" />
                                            </a>
                                            <a href="/">
                                                <BsShare fontSize="2rem" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
