import './shopLeftBar.css';


import * as React from "react";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";

function ShopLeftBar() {
    return (
        <div className="shop__sidebar">
            <div className="sidebar__categories">
                <div className="section-title">
                    <h4>Danh mục</h4>
                </div>
                <div className="categories__accordion">
                    <div className="accordion" id="accordionExample">
                        <div className="card">
                            <div className="card-heading active">
                                <a href="/" data-toggle="collapse" data-target="#collapseOne">Nữ</a>
                            </div>
                            <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                <div className="card-body">
                                    <ul>
                                        <li><a href="/">Áo khoác</a></li>
                                        <li><a href="/">Jackets</a></li>
                                        <li><a href="/">Váy</a></li>
                                        <li><a href="/">Áo thun</a></li>
                                        <li><a href="/">Quần Jeans</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-heading">
                                <a href="/" data-toggle="collapse" data-target="#collapseTwo">Nam</a>
                            </div>
                            <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                                <div className="card-body">
                                    <ul>
                                        <li><a href="/">Áo khoác</a></li>
                                        <li><a href="/">Jackets</a></li>
                                        <li><a href="/">Dresses</a></li>
                                        <li><a href="/">Shirts</a></li>
                                        <li><a href="/">T-shirts</a></li>
                                        <li><a href="/">Jeans</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-heading">
                                <a href="/" data-toggle="collapse" data-target="#collapseThree">Trẻ em</a>
                            </div>
                            <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                <div className="card-body">
                                    <ul>
                                        <li><a href="/">Coats</a></li>
                                        <li><a href="/">Jackets</a></li>
                                        <li><a href="/">Dresses</a></li>
                                        <li><a href="/">Shirts</a></li>
                                        <li><a href="/">T-shirts</a></li>
                                        <li><a href="/">Jeans</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-heading">
                                <a href="/" data-toggle="collapse" data-target="#collapseFour">Phụ kiện</a>
                            </div>
                            <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                                <div className="card-body">
                                    <ul>
                                        <li><a href="/">Coats</a></li>
                                        <li><a href="/">Jackets</a></li>
                                        <li><a href="/">Dresses</a></li>
                                        <li><a href="/">Shirts</a></li>
                                        <li><a href="/">T-shirts</a></li>
                                        <li><a href="/">Jeans</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-heading">
                                <a href="/" data-toggle="collapse" data-target="#collapseFive">Cosmetic</a>
                            </div>
                            <div id="collapseFive" className="collapse" data-parent="#accordionExample">
                                <div className="card-body">
                                    <ul>
                                        <li><a href="/">Coats</a></li>
                                        <li><a href="/">Jackets</a></li>
                                        <li><a href="/">Dresses</a></li>
                                        <li><a href="/">Shirts</a></li>
                                        <li><a href="/">T-shirts</a></li>
                                        <li><a href="/">Jeans</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar__filter">
                <div className="section-title">
                    <h4>Lọc theo giá</h4>
                </div>
                <div className="filter-range-wrap">
                    <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                    data-min="33" data-max="99"></div>
                    <div className="range-slider">
                        <div className="price-input">
                            <p>Price:</p>
                            <input type="text" id="minamount"></input>
                            <input type="text" id="maxamount"></input>
                        </div>
                    </div>
                </div>

                <a href="/">Filter</a>
            </div>
            <div className="sidebar__sizes">
                <div className="section-title">
                    <h4>Lọc theo size</h4>
                </div>
                <div className="size__list">
                    <label for="xxs">
                        xxs
                        <input type="checkbox" id="xxs"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="xs">
                        xs
                        <input type="checkbox" id="xs"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="xss">
                        xs-s
                        <input type="checkbox" id="xss"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="s">
                        s
                        <input type="checkbox" id="s"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="m">
                        m
                        <input type="checkbox" id="m"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="ml">
                        m-l
                        <input type="checkbox" id="ml"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="l">
                        l
                        <input type="checkbox" id="l"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="xl">
                        xl
                        <input type="checkbox" id="xl"></input>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className="sidebar__color" >
                <div className="section-title">
                    <h4>Lọc theo màu</h4>
                </div>
                <div className="size__list color__list">
                    <label for="black">
                        Blacks
                        <input type="checkbox" id="black"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="whites">
                        Whites
                        <input type="checkbox" id="whites"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="reds">
                        Reds
                        <input type="checkbox" id="reds"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="greys">
                        Greys
                        <input type="checkbox" id="greys"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="blues">
                        Blues
                        <input type="checkbox" id="blues"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="beige">
                        Beige Tones
                        <input type="checkbox" id="beige"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="greens">
                        Greens
                        <input type="checkbox" id="greens"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label for="yellows">
                        Yellows
                        <input type="checkbox" id="yellows"></input>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
    );
    
};

export default ShopLeftBar;