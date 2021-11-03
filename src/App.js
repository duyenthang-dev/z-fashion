import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { lazy, Suspense } from "react";

// home pages
const HomePage = lazy(() => import("./pages/home/home"));

// shop pages



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Suspense fallback={<div>Loading... </div>}>
                    <Switch>
                        <Route path="/" component={HomePage} />
                        {/* <Route path="/catalog" component={Shop} /> */}
                        {/* <Route path="/cart" component={Cart} /> */}
                        {/* <Route path="/check-out" component={Checkout} /> */}
                        {/* <Route path="/contact" component={Contact} /> */}
                        {/* <Route path="/product-detail" component={ProductDetial} /> */}
                        {/* <Route path="/blog" component={Blog} /> */}
                        {/* <Route path="/whishlist" component={Whishlist} /> */}
                        {/* <Route path="/my-account" component={MyAccount} /> */}
                        {/* <Route path="/login" component={Login} /> */}
                        {/* <Route exact component={NotFound} /> */}
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
