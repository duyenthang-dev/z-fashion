import React, { Fragment, useState } from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    deleteCart,
    decreaseQuantity,
    increaseQuantity,
} from "./../../redux/action/productAction";
const CartItem = (props) => {
    // const { id, imgSrc, title, price, qty, subtotal } = props;
    const prod = {
        id: props.id,
        img: props.imgSrc,
        title: props.title,
        price: props.price,
        qty: props.qty,
        subtotal: props.subtotal,
    };

    return (
        <Fragment>
            <tr>
                <th className="product-thumbnail">
                    <a href="/" className="product-link">
                        <img src={prod.img} alt="váy" width="100%" />
                    </a>
                </th>
                <th className="product-name">
                    <a href="/product/1">{prod.title}</a>
                    <div className="cart-item-variation">
                        <span>Color: white</span>
                        <span>Size: x</span>
                    </div>
                </th>
                <th className="product-price">
                    <span className="amount old">{prod.price} VNĐ</span>
                    <span className="amount">{prod.price}</span>
                </th>
                <th className="product-quantity">
                    <div className="shopcart-plus-minus">
                        <div
                            className="decrease"
                            onClick={() => props.decreaseQuantity(prod)}
                        >
                            -
                        </div>
                        <input
                            type="text"
                            className="quantity-box"
                            name="qtybutton"
                            value={prod.qty}
                        />
                        <div
                            className="increase"
                            onClick={() => props.increaseQuantity(prod)}
                        >
                            +
                        </div>
                    </div>
                </th>
                <th className="product-subtotal">{prod.subtotal} VNĐ</th>
                <th className="product-remove">
                    <button onClick={() => props.deleteCart(prod)}>
                        <FaTimes fontSize="2rem" />
                    </button>
                </th>
            </tr>
        </Fragment>
    );
};

CartItem.propsTypes = {
    id: PropTypes.number,
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number,
    subtotal: PropTypes.number,
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCart: (id) => dispatch(deleteCart(id)),
        decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
        increaseQuantity: (id) => dispatch(increaseQuantity(id)),
    };
};
export default connect(null, mapDispatchToProps)(CartItem);
