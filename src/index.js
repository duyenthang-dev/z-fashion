import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Test from "./test";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import rootReducer from "./redux/reducer/rootReducer.jsx";
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
