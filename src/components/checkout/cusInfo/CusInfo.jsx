import React from "react";
import "./CusInfo.css";

function CusInfo() {
    return (
        <div className="cusinfo">
            <div className="top">
                <div className="lin"></div>
                <h2>THÔNG TIN KHÁCH HÀNG</h2>
            </div>
            <hr />
            <form>
                <div className="textbox">
                    <label htmlFor="name">
                        Họ và tên
                        <br />
                        <input
                            type="text"
                            placeholder="Nhập họ và tên"
                            id="name"
                            name="name"
                            required
                        />
                    </label>
                </div>
                <div className="textbox phoneE">
                    <div className="phoneEsub">
                        <label htmlFor="phone">
                            Điện thoại
                            <br />
                            <input
                                type="text"
                                placeholder="Nhập số điện thoại"
                                id="phone"
                                name="phone"
                                required
                            />
                        </label>
                    </div>
                    <div className="phoneEsub">
                        <label htmlFor="email">
                            Email
                            <br />
                            <input
                                type="text"
                                placeholder="Nhập email"
                                id="email"
                                name="email"
                                required
                            />
                        </label>
                    </div>
                </div>
                <div className="textbox">
                    <label htmlFor="address">
                        Địa chỉ
                        <br />
                        <input
                            type="text"
                            placeholder="Nhập địa chỉ giao hàng"
                            id="address"
                            name="address"
                            required
                        />
                    </label>
                </div>
            </form>
        </div>
    );
}

export default CusInfo;
