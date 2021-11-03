import "./productItem.css";
import { Link } from "react-router-dom";
import image from "./../../assets/images/product/vay_nu/vay_hong_270x360.jpg";
import "./../../utility/css/utility.css";
import { MdZoomOutMap } from "react-icons/md";
import { BsCartPlusFill } from "react-icons/bs";
import ProductRating from "./productRating";
export default function ProductItem() {
    return (
        <div className="product-item center pt-5">
            <div className="product-item__img">
                <Link to="/home">
                    <img src={image} alt="váy nữ hồng" />
                </Link>
                <span className="product-sale">-20%</span>
                <div className="product-action">
                    <div className="product-action__add">
                        <BsCartPlusFill />
                        <span>Thêm vào giỏ</span>
                    </div>
                    <div className="product-action__view">
                        <MdZoomOutMap />
                    </div>
                </div>
            </div>
            <div className="product-item__content">
                <div className="product-content-left">
                    <h4>Váy dài màu hồng</h4>
                    <div className="product-item__rate">
                        <ProductRating ratingValue={4} size="2rem" />
                    </div>
                    <div className="product-item__price">
                        <span>300.000 VNĐ</span>
                    </div>
                </div>
                <div className="product-content-right"></div>
            </div>
        </div>
    );
}
