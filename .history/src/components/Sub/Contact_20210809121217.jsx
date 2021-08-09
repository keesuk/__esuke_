import { useState } from "react";
import Draggable from "react-draggable"

import theme from "../../css/_Theme.jsx";

const Contact = () => {

    const allStytle = {

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "white",
        boxShadow: `.5rem .5rem 1rem rgba(0, 0, 0, .5)`,
        width: "325px",
        height: "204px",
        padding: "10px",
        left: "16vw",
        bottom: "0vw",
        position: "absolute",
        zIndex: 100000,
    }
        
    return (
        <Draggable>
        <div style={allStytle}></div>
        </Draggable>
    );
}


export default Contact;