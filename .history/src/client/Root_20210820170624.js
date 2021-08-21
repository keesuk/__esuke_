import React from "react";
import { HashRouter as Router } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';
import App from "../shared/App";


const Root = () => {
    smoothscroll.polyfill()

    return(
        <Router basename="/">
            <App/>
        </Router>
    )
}

export default Root;