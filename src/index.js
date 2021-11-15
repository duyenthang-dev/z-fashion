import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Test from "./test";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter >
            <Test />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

