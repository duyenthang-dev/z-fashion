import * as React from "react";
import Grid from "@mui/material/Grid";
import "./paymentMethod.css";

function ImageAvatars() {
    return (
        <div>
            <h2>Phương thức thanh toán</h2>
            <form>
                <ul>
                    <li>
                        <ul className="firstMethod">
                            <li>
                                <img src="./MoMo_Logo.png" alt="MoMo" />
                            </li>
                            <li>Ví điện tử</li>
                            <li>
                                <input type="radio" name="payment" id="momo" />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="secMethod">
                            <li>
                                <img src="#" alt="Cod" />
                            </li>
                            <li>Thanh toán khi nhận hàng</li>
                            <li>
                                <input type="radio" name="payment" id="cod" />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="thirdMethod">
                            <li>
                                <img src="#" alt="Cod" />
                            </li>
                            <li>Thẻ tín dụng/ghi nợ</li>
                            <li>
                                <input type="radio" name="payment" id="visa" />
                            </li>
                        </ul>
                    </li>
                </ul>
            </form>
            <button>Đặt đơn</button>
        </div>
    );
}

export default ImageAvatars;
