import React from "react";
import { BrowserRouter } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';
import App from "../shared/App";


const Root = () => {
    smoothscroll.polyfill()

    return(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}

export default Root;