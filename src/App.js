import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { lazy, Suspense } from "react";
// root, only footer and header
const Root = lazy(() => import("./pages/root/root"));
// home pages
const HomePage = lazy(() => import("./pages/home/home"));
// shop pages
const Shop = lazy(() => import("./pages/shop/shop"));
// cart pages
const Cart = lazy(() => import("./pages/cart/cart"));
//checkout pages
const Checkout = lazy(() => import("./pages/checkout/checkout"));
//contact pages
const Contact = lazy(() => import("./pages/contact/contact"));
//product details pages
const ProductDetail = lazy(() =>import("./pages/product-details/productDetail"));
//blog pages
const Blog = lazy(() => import("./pages/blog/blog"));
//whishlist pages
const Whishlist = lazy(() => import("./pages/whishlist/whishlist"));
// my account page
const MyAccount = lazy(() => import("./pages/my-account/myAccount"));
//Login pages
const Login = lazy(() => import("./pages/login-register/login"));
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Suspense fallback={<div>Loading... </div>}>
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/catalog" component={Shop} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/check-out" component={Checkout} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/product-detail" component={ProductDetail}/>
                        <Route path="/blog" component={Blog} />
                        <Route path="/whishlist" component={Whishlist} />
                        <Route path="/my-account" component={MyAccount} />
                        <Route path="/login" component={Login} />
                        <Route path="/" component={Root} />
                        {/* <Route exact component={NotFound} /> */}
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
