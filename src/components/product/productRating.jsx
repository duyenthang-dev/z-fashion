import { BsStarFill, BsStar } from "react-icons/bs";
import PropTypes from "prop-types";
import "./../../utility/css/utility.css";
import React, { Fragment } from "react";

const ProductRating = (props) => {
    let rating = [];
    for (let i = 1; i <= props.ratingValue; i++) {
        rating.push(
            <BsStarFill
                key={i}
                style={{ color: "#ff9806", fontSize: props.size }}
            ></BsStarFill>
        );
    }
    for (let i = props.ratingValue + 1; i <= 5; i++) {
        rating.push(
            <BsStar
                key={i}
                style={{ color: "#ff9806", fontSize: props.size }}
            ></BsStar>
        );
    }
    return <Fragment>{rating}</Fragment>;
};
ProductRating.propTypes = {
    ratingValue: PropTypes.number,
    size: PropTypes.string,
};
export default ProductRating;
