import { useState } from "react";
import Draggable from "react-draggable"

import theme from "../../css/_Theme.jsx";

const Contact = () => {

    const allStytle = {

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "white",
        boxShadow: ``,
        border: "1px solid black",
        width: "500px",
        height: "700px",
        padding: "10px",
        right: "0",
        bottom: "0",
        position: "absolute",
        zIndex: 100000,
    }
        
    return (
        <div style={allStytle}></div>
    );
}


export default Contact;