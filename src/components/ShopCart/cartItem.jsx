import React, { Fragment} from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    deleteCart,
    decreaseQuantity,
    increaseQuantity,
} from "./../../redux/action/productAction";
import Slide from "@mui/material/Slide";
function TransitionLeft(props) {
    return <Slide {...props} direction="right" />;
}

const CartItem = (props) => {
    // const { id, imgSrc, title, price, qty, subtotal } = props;
    const prod = {
        id: props.id,
        img: props.imgSrc,
        title: props.title,
        price: props.price,
        color: props.color,
        size: props.size,
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
                        <span>Color: {prod.color}</span>
                        <span>Size: {prod.size}</span>
                    </div>
                </th>
                <th className="product-price">
                    <span className="amount old">
                        {props.price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </span>
                    <span className="amount">
                        {props.price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </span>
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
                            readOnly
                        />
                        <div
                            className="increase"
                            onClick={() => props.increaseQuantity(prod)}
                        >
                            +
                        </div>
                    </div>
                </th>
                <th className="product-subtotal">
                    {props.subtotal.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                    })}
                </th>
                <th className="product-remove">
                    <button
                        onClick={() => {
                            props.openToastSuccess(TransitionLeft);
                            props.deleteCart(prod.id, prod.color, prod.size);
                            
                        }}
                    >
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
    color: PropTypes.string,
    size: PropTypes.string,
    qty: PropTypes.number,
    subtotal: PropTypes.number,
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCart: (id, color, size) => dispatch(deleteCart(id, color, size)),
        decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
        increaseQuantity: (id) => dispatch(increaseQuantity(id)),
    };
};
export default connect(null, mapDispatchToProps)(CartItem);
