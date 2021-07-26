import React from "react";
import { BrowserRouter } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';
import App from "../shared/App";
import ScrollToTop from "../components/Main/ScrollToTop.jsx";


const Root = () => {
    smoothscroll.polyfill()

    return(
        <BrowserRouter>
            <ScrollToTop/>
            <App/>
        </BrowserRouter>
    )
}

export default Root;