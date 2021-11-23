import './shopLeftBar.css';


import * as React from "react";
import { func } from 'prop-types';
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
import ExpandMore from '@mui/icons-material/ExpandMore';

function expand()
{
    var dropdown = document.getElementsByClassName("card-heading");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") 
            {
                dropdownContent.style.display = "none";
            } else 
            {
                dropdownContent.style.display = "block";
            }
        });
    }
};

function ShopLeftBar() {
    return (
        <div className="shop__sidebar">
            <div className="sidebar__categories">
                <div className="section-title">
                    <h4>Danh mục</h4>
                </div>
                <div className="categories__accordion">
                    <div className="card">
                        <div className="card-heading" onClick={expand}>
                            <a >Nữ</a>
                            <i ><ExpandMore /></i>
                        </div>
                        <div className="dropdown__container">
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
                        <div className="card-heading" onClick={expand}>
                            <a>Nam</a>
                            <i ><ExpandMore /></i>
                        </div>
                        <div className="dropdown__container" >
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
                        <div className="card-heading" onClick={expand}>
                            <a >Trẻ em</a>
                            <i ><ExpandMore /></i>
                        </div>
                        <div className="dropdown__container" >
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
                        <div className="card-heading" onClick={expand}>
                            <a>Phụ kiện</a>
                            <i ><ExpandMore /></i>
                        </div>
                        <div id="collapseFour" className="collapse" >
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
                        <div className="card-heading" onClick={expand}>
                            <a>Cosmetic</a>
                            <i ><ExpandMore /></i>
                        </div>
                        <div id="collapseFive" className="collapse" >
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
            <div className="sidebar__filter">
                <div className="section-title">
                    <h4>Lọc theo giá</h4>
                </div>
                <div className="filter-range-wrap">
                    <input type="range" class="form-range" min="0" max="10" id="customRange2"></input>

                    <div className="range-slider">
                        <div className="price-input">
                            <p>Giá: 100.000 - 600.000đ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar__sizes">
                <div className="section-title">
                    <h4>Lọc theo size</h4>
                </div>
                <div className="size__list">
                    <label htmlFor="xxs">
                        xxs
                        <input type="checkbox" id="xxs"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="xs">
                        xs
                        <input type="checkbox" id="xs"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="xss">
                        xs-s
                        <input type="checkbox" id="xss"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="s">
                        s
                        <input type="checkbox" id="s"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="m">
                        m
                        <input type="checkbox" id="m"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="ml">
                        m-l
                        <input type="checkbox" id="ml"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="l">
                        l
                        <input type="checkbox" id="l"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="xl">
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
                    <label htmlFor="black">
                        Blacks
                        <input type="checkbox" id="black"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="whites">
                        Whites
                        <input type="checkbox" id="whites"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="reds">
                        Reds
                        <input type="checkbox" id="reds"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="greys">
                        Greys
                        <input type="checkbox" id="greys"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="blues">
                        Blues
                        <input type="checkbox" id="blues"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="beige">
                        Beige Tones
                        <input type="checkbox" id="beige"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="greens">
                        Greens
                        <input type="checkbox" id="greens"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="yellows">
                        Yellows
                        <input type="checkbox" id="yellows"></input>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
            <a className="filter__btn" href="/">Lọc</a>
        </div>
    );
};




export default ShopLeftBar;