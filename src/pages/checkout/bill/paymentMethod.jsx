import * as React from "react";
import Grid from "@mui/material/Grid";
import "./paymentMethod.css";
import ImagePayment from "./payment-image/payment-image";
import Button from "@mui/material/Button";
import {useState, useEffect} from "react";
import orderApi from './../../../api/orderApi';
import { useSelector } from "react-redux";
const ImageAvatars = () => {
    const cart = useSelector((state) => state.products.cart);
    const [paymentMethod, setPaymentMethod] = useState("");
    const handlePayment = async () =>{
        const data = {};
        let orderId = 'ZF';
        for(let i =0; i < 5; i++){
            orderId += Math.floor(Math.random() * 10);
        }
        let amount = cart.reduce((acc, item) => acc + item.price, 0);
        // amount = 1;
        data['orderId'] = orderId;
        data['amount'] = "" + amount;
        data['orderInfo'] = "Thanh toán cho đơn hàng mua quần áo";
        data['status'] = -1;

        if(paymentMethod === "momo"){
            const jsonData = JSON.stringify(data);
            console.log(data);
            const response = await orderApi.sendRequest(jsonData);
            console.log(response.data);
            const payUrl = response.data.payUrl;
            window.open(payUrl);
        }
    }
    useEffect(() =>{
        handlePayment();
    });
    return (
        <div className="payment-frame">
            <h2 style={{ marginBottom: 20 }}>Phương thức thanh toán</h2>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <img
                        src={ImagePayment["Momo"]}
                        alt="Momo"
                        className="image-payment"
                    />
                </Grid>
                <Grid item xs={10}>
                    <p>Momo</p>
                </Grid>
                <Grid item xs={1}>
                    <label>
                        <input
                            type="radio"
                            className="option-input radio"
                            name="paymentMethod"
                            id="momo"
                            value="momo"
                        />
                    </label>
                </Grid>

                <Grid item xs={1}>
                    <img
                        src={ImagePayment["MasterCard"]}
                        alt="Momo"
                        className="image-payment"
                    />
                </Grid>
                <Grid item xs={10}>
                    <p>Master Card</p>
                </Grid>
                <Grid item xs={1}>
                    <label>
                        <input
                            type="radio"
                            className="option-input radio"
                            name="paymentMethod"
                            id="mastercard"
                            value="Master Card"
                            onClick={() => setPaymentMethod("momo")}
                        />
                    </label>
                </Grid>

                <Grid item xs={1}>
                    <img
                        src={ImagePayment["Visa"]}
                        alt="Momo"
                        className="image-payment"
                    />
                </Grid>
                <Grid item xs={10}>
                    <p>Visa</p>
                </Grid>
                <Grid item xs={1}>
                    <label>
                        <input
                            type="radio"
                            className="option-input radio"
                            name="paymentMethod"
                            id="visa"
                            value="Visa"
                        />
                    </label>
                </Grid>

                <Grid item xs={1}>
                    <img
                        src={ImagePayment["ViettelPay"]}
                        alt="Momo"
                        className="image-payment"
                    />
                </Grid>
                <Grid item xs={10}>
                    <p>Viettle Pay</p>
                </Grid>
                <Grid item xs={1}>
                    <label>
                        <input
                            type="radio"
                            className="option-input radio"
                            name="paymentMethod"
                            id="viettleay"
                            value="Viettel Pay"
                        />
                    </label>
                </Grid>
            </Grid>

            <Button
                variant="contained"
                style={{ marginTop: 40 }}
                onClick={() => {
                    
                    const rbs = document.getElementsByName("paymentMethod");
                    let checkedOption = "";
                    for (const rb of rbs) {
                        if (rb.checked) {
                            checkedOption = rb.value;
                            break;
                        }
                    }
                    setPaymentMethod(checkedOption);
                    // handlePayment();
                }}
            >
                THANH TOÁN
            </Button>
        </div>
    );
};

export default ImageAvatars;
