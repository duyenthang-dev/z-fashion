import "./productItem.css";
import { Link } from "react-router-dom";
import "./../../utility/css/utility.css";
import { MdZoomOutMap } from "react-icons/md";
import { BsCartPlusFill } from "react-icons/bs";
import ProductRating from "./productRating";
import { FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";
const ProductItem = (props) => {
    const status = props.status;
    let clasStatus = '';
    if(status === 'New')
        clasStatus = 'new'
    else if(status === '')
        clasStatus = 'hidden';
    else clasStatus = 'sale';
    return (
        <div className="product-item center">
            <div className="product-item__img">
                <Link to="/home">
                    <img
                        src={props.src}
                        width="270"
                        height="360"
                        alt="chân váy nữ hồng"
                    />
                </Link>
                <span className={`product-status ${clasStatus}`}>{props.status}</span>
                <div className="product-action">
                    <div className="product-action__add">
                        <BsCartPlusFill style={{ fontSize: "2rem" }} />
                        <span>Thêm vào giỏ</span>
                    </div>
                    <div className="product-action__view">
                        <MdZoomOutMap style={{ fontSize: "2rem" }} />
                    </div>
                </div>
            </div>
            <div className="product-item__content">
                <div className="product-content-left">
                    <h4>{props.title}</h4>
                    <div className="product-item__rate">
                        <ProductRating ratingValue={props.rate} size="1.4rem" />
                    </div>
                    <div className="product-item__price">
                        <span>{props.price} VNĐ</span>
                    </div>
                </div>
                <div className="product-content-right">
                    <FaRegHeart fontSize="1.8rem" fontWeight="100" />
                </div>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    status: PropTypes.string,
    src: PropTypes.string,
    price: PropTypes.number,
    rate: PropTypes.number,
};
export default ProductItem;
