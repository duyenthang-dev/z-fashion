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
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';
import Grow from "@mui/material/Grow";
import Slide from '@mui/material/Slide';

function TransitionLeft(props) {
    return <Slide {...props} direction="right" />;
}
const ProductItem = (props) => {
    const prod = {
        id: props.id,
        img: props.src,
        title: props.title,
        price: props.price,
    };
    const status = props.status;
    let clasStatus = "";
    if (status === "New") clasStatus = "new";
    else if (status === "") clasStatus = "hidden";
    else clasStatus = "sale";
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");

    //* open modal
    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //*  toast success
    const [transition, setTransition] = React.useState(undefined);
    const [openToast, setOpenToast] = React.useState(false);
    const handleClickToastSuccess = (Transition) => {
        setTransition(() => Transition);
        setOpenToast(true);
    };
    const handleCloseToastSuccess = (event, reason) => {
        console.log('close');
        if (reason === "clickaway") {
            return;
        }
        setOpenToast(false);
    };

    //* toast error
    const [msgError, setMsgError] = React.useState("");
    const [openToastError, setOpenToastError] = React.useState(false);
    const handleClickToastError = (Transition, message) => {
        setMsgError(message);
        setTransition(() => Transition);
        setOpenToastError(true);
    };
    const handleCloseToastError = (reason, message) => {
        console.log('close');
        if (reason === "clickaway") {
            return;
        }
        setOpenToastError(false);
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
                        onClick={() => {
                            props.addToCart(prod.id, "trắng", "M");
                            handleClickToastSuccess(TransitionLeft);
                        }}
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
                            // keepMounted
                            transition={Grow}
                            transitionDuration={500}
                        >
                            <DialogContent dividers={scroll === "body"}>
                                <ProductModal
                                    action={handleClose}
                                    id={props.id}
                                    title={props.title}
                                    src={props.src}
                                    price={props.price}
                                    rate={props.rate}
                                    color={props.color}
                                    size={props.size}
                                    desc={props.desc}
                                    addToCart={props.addToCart}
                                    openToastSuccess = {handleClickToastSuccess}
                                    openToastError ={handleClickToastError}
                                    
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
                        <span>{props.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                    </div>
                </div>
                <div className="product-content-right">
                    <FaRegHeart fontSize="1.8rem" fontWeight="100" />
                </div>
            </div>
            <Snackbar
                open={openToast}
                autoHideDuration={3000}
                onClose={handleCloseToastSuccess}
                TransitionComponent={transition}
            >
                <Alert
                    onClose={handleCloseToastSuccess}
                    severity="success"
                    sx={{ width: "100%" }}
                    fontSize="3rem"
                >
                    <p style={{fontSize: "1.5rem", fontFamily: "\"Poppins\", sans-serif", fontWeight: "500"}}>Đã thêm sản phẩm vào giỏ</p>
                </Alert>
            </Snackbar>

            <Snackbar
                open={openToastError}
                autoHideDuration={3000}
                onClose={handleCloseToastError}
                TransitionComponent={transition}
            >
                <Alert
                    onClose={handleCloseToastError}
                    severity="error"
                    sx={{ width: "100%" }}
                    fontSize="3rem"
                >
                    <p style={{fontSize: "1.5rem", fontFamily: "\"Poppins\", sans-serif", fontWeight: "500"}}>{msgError}</p>
                </Alert>
            </Snackbar>
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
        addToCart: (id, color, size, qty) =>
            dispatch(addToCart(id, color, size, qty)),
    };
};
export default connect(null, mapDispatchToProps)(ProductItem);
