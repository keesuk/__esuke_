import React from "react";
import { Route } from "react-router-dom";
import Index from "../components/Index"
import Home from "../components/Home"
import Menu from "../components/Menu"



const Header = () => {
    return (
        <header>
            <Route exact path="/" component={Home}/>
            <Menu/>
            <Route exact path="/Index" component={Index}/>
        </header>
    )
}

export default Header;