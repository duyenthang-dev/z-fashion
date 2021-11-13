import "./productModal.css";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import { useState } from "react";
import React from "react";
import { BsShare } from "react-icons/bs";
import { FaRegHeart, FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import { shirtMale } from "./../../../imageSource";
import ProductRating from "./../productRating";
import { AiOutlineCheck } from "react-icons/ai";
import Slide from "@mui/material/Slide";

function TransitionLeft(props) {
    return <Slide {...props} direction="right" />;
}
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

const ProductModal = (props) => {
    const prod = {
        id: props.id,
        img: props.src,
        title: props.title,
        price: props.price,
        func: props.func,
    };

    const listColor = props.color;
    const listSize = props.size;
    const [color, setColor] = useState("");
    const [colorIndex, setcolorIndex] = useState(null);
    const [size, setSize] = useState("");
    const [sizeIndex, setSizeIndex] = useState(null);
    const [qty, setQty] = useState(1);

    return (
        <div
            className="modal1 hidden backdrop"
            role="dialog"
            aria-modal="true"
            tabIndex="-1"
            style={{ display: "block" }}
        >
            <div className="modal1-dialog" role="dialog">
                <div className="modal1-content">
                    <div className="modal-header">
                        <button
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={props.action}
                        >
                            <FaTimes fontSize="2rem" />
                        </button>
                    </div>
                    <div className="modal-body">
                        <Grid container>
                            <Grid item lg={5} md={6} sm={12}>
                                <div className="product-large-img">
                                    <img
                                        src={props.src}
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
                                    <h2>{props.title}</h2>

                                    <div className="product-details__rating">
                                        <ProductRating
                                            ratingValue={props.rate}
                                            size={"1.3rem"}
                                        />
                                        <div className="product-details__order">
                                            <span>40 reviews</span>
                                            <span>100 orders</span>
                                        </div>
                                    </div>
                                    <div className="product-details__desc">
                                        <p>{props.desc}</p>
                                    </div>
                                    <div className="prodcut-details__price">
                                        <span>{props.price}</span>
                                    </div>
                                    <div className="product-details__color">
                                        <span>Màu sắc:</span>
                                        <ul>
                                            {listColor.map((color, idx) => {
                                                return (
                                                    <li
                                                        className={color}
                                                        onClick={() => {
                                                            setcolorIndex(idx);
                                                            setColor(color);
                                                        }}
                                                        key={idx}
                                                    >
                                                        <div
                                                            className={
                                                                colorIndex ===
                                                                idx
                                                                    ? "icon-check"
                                                                    : "icon-check hidden-check"
                                                            }
                                                        >
                                                            <AiOutlineCheck fontSize="3rem" />
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className="product-details__size">
                                        <span>Size:</span>
                                        <ul>
                                            {listSize.map((size, idx) => {
                                                return (
                                                    <li
                                                        key={idx}
                                                        onClick={() => {
                                                            setSize(size);
                                                            setSizeIndex(idx);
                                                        }}
                                                        className={
                                                            sizeIndex === idx
                                                                ? "size-check"
                                                                : ""
                                                        }
                                                    >
                                                        <span>{size}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className="product-details__quantity">
                                        <span>Số lượng</span>
                                        <div className="cart-plus-minus">
                                            <div
                                                className="decrease"
                                                onClick={() =>
                                                    setQty((prev) =>
                                                        prev === 1
                                                            ? 1
                                                            : prev - 1
                                                    )
                                                }
                                            >
                                                -
                                            </div>
                                            <input
                                                type="text"
                                                className="quantity-box"
                                                name="qtybutton"
                                                value={qty}
                                                readOnly
                                            />
                                            <div
                                                className="increase"
                                                onClick={() =>
                                                    setQty((prev) => prev + 1)
                                                }
                                            >
                                                +
                                            </div>
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
                                        <div
                                            className="pro-details__add"
                                            onClick={() => {
                                                if (color !== "" && size !== "")
                                                {
                                                    props.addToCart(prod.id, color, size,qty);
                                                    props.openToast(TransitionLeft);
                                                }
                                                
                                            }}
                                        >
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
ProductModal.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    src: PropTypes.string,
    price: PropTypes.number,
    rate: PropTypes.number,
    color: PropTypes.array,
    size: PropTypes.array,
    desc: PropTypes.string,
    addToCart: PropTypes.func,
};
export default ProductModal;
