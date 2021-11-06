import React from "react";
import "./ShopCart.css";

function ShopCart() {
    return (
        <div className="container">
            <div className="link">
                <a href="./" className="title0">
                    {" "}
                    Home
                </a>
                <span className="title"> &gt; Shopping cart</span>
            </div>
            <div className="table_cart">
                <div className="table-container">
                    <ul className="responsive-table">
                        <li className="table-header row">
                            <div className="col-1"> PRODUCT</div>
                            <div className="col-2"> PRICE</div>
                            <div className="col-3"> QUANTITY</div>
                            <div className="col-4"> TOTAL</div>
                            <div className="col-5"></div>
                        </li>
                        <li className="table-row row">
                            <div className="col-1"> Áo thun</div>
                            <div className="col-2">500.000 vnd</div>
                            <div className="col-3">
                                <input type="text" value="1"></input>
                            </div>
                            <div className="col-4">500.000 vnd</div>
                            <div className="col-5"></div>
                        </li>
                        <li className="table-row row">
                            <div className="col-1"> Áo khoác</div>
                            <div className="col-2">400.000 vnd</div>
                            <div className="col-3">
                                <input type="text" value="1"></input>
                            </div>
                            <div className="col-4">900.000 vnd</div>
                            <div className="col-5"></div>
                        </li>
                        <li className="table-row row">
                            <div className="col-1"> Balo</div>
                            <div className="col-2">300.000 vnd</div>
                            <div className="col-3">
                                <input type="text" value="1"></input>
                            </div>
                            <div className="col-4">1.200.000 vnd</div>
                            <div className="col-5"></div>
                        </li>
                        <li className="table-row row">
                            <div className="col-1"> Áo sơ mi</div>
                            <div className="col-2">500.000 vnd</div>
                            <div className="col-3">
                                <input type="text" value="1"></input>
                            </div>
                            <div className="col-4">1.700.000 vnd</div>
                            <div className="col-5"></div>
                        </li>
                        <li className="table-row row">
                            <div className="col-1"> Áo vest</div>
                            <div className="col-2">500.000 vnd</div>
                            <div className="col-3">
                                <input type="text" value="1"></input>
                            </div>
                            <div className="col-4">2.200.000 vnd</div>
                            <div className="col-5"></div>
                        </li>
                        <li className="table-row row">
                            <div className="col-x">
                                <button className="but">
                                    Continue Shopping{" "}
                                </button>
                            </div>
                            <div className="col-y">
                                <button className="but"> Update Cart </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="fill_out">
                <div className="footer__newsletter">
                    <p>Discount Code</p>
                    <form action="#">
                        <input type="text" placeholder="enter code" />
                        <button type="submit" className="btn">
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className="abc"></div>
            </div>
        </div>
    );
}

export default ShopCart;
