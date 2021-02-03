import React from "react";
import Index from "../components/Index"
import Home from "../components/Home"
import Menu from "../components/Menu"



const Header = () => {
    return (
        <header>
            <Home/>
            <Menu/>
            <Index/>
        </header>
    )
}

export default Header;