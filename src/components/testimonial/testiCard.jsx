import "./testiCard.css";
import ProductRating from "./../product/productRating";
import PropTypes from "prop-types";
const TestiCard = (props) => {
    return (
        <div className="testi-card">
            <div className="testi__rating">
                <ProductRating ratingValue={props.rating} size="1.5rem" />
            </div>
            <div className="testi__content">
                <p>{props.content}</p>
            </div>
            <div className="testi__author">
                <div className="testi__author-avt">
                    <img src={props.avatar} alt="avt1" />
                </div>
                <div className="testi__author-desc">
                    <span>{props.name}</span>
                    <span>{props.info}</span>
                </div>
            </div>
        </div>
    );
};

TestiCard.propTypes = {
    rating: PropTypes.number,
    content: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    info: PropTypes.string,
};
export default TestiCard;
