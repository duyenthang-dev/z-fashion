import "./productItem.css";
import { Link } from "react-router-dom";
import "./../../utility/css/utility.css";
import { MdZoomOutMap } from "react-icons/md";
import { BsCartPlusFill } from "react-icons/bs";
import ProductRating from "./productRating";
import { FaRegHeart } from "react-icons/fa";
import React from "react";
import PropTypes from "prop-types";
import ProductModal from "./product-modal/productModal";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { connect } from "react-redux";
import { addToCart } from "./../../redux/action/productAction";
const ProductItem = (props) => {
    const prod = {
        id: props.id,
        img: props.src,
        title: props.title,
        price: props.price,
    }
    const status = props.status;
    let clasStatus = "";
    if (status === "New") clasStatus = "new";
    else if (status === "") clasStatus = "hidden";
    else clasStatus = "sale";
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    return (
        <div className="product-item center">
            <div className="product-item__img">
                <Link to="/home">
                    <img
                        src={props.src}
                        width="255"
                        height="340"
                        alt="chân váy nữ hồng"
                    />
                </Link>
                <span className={`product-status ${clasStatus}`}>
                    {props.status}
                </span>
                <div className="product-action">
                    <div
                        className="product-action__add"
                        onClick={() => props.addToCart(prod)}
                    >
                        <BsCartPlusFill style={{ fontSize: "1.8rem" }} />
                        <span>Thêm vào giỏ</span>
                    </div>
                    <div className="product-action__view">
                        <MdZoomOutMap
                            style={{ fontSize: "1.8rem" }}
                            onClick={handleClickOpen("body")}
                        />
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                            maxWidth="lg"
                            keepMounted
                        >
                            <DialogContent dividers={scroll === "body"}>
                                <ProductModal
                                    action={handleClose}
                                    title={props.title}
                                    src={props.src}
                                    price={props.price}
                                    rate={props.rate}
                                    desc={props.desc}
                                />
                            </DialogContent>
                        </Dialog>
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
    desc: PropTypes.string,
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};
export default connect(null, mapDispatchToProps)(ProductItem);
