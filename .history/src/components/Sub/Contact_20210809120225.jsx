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
        width: "200px",
        height: "300px",
        padding: "10px",
        left: "15vw",
        bottom: "0",
        position: "absolute",
        zIndex: 100000,
    }
        
    return (
        <div style={allStytle}></div>
    );
}


export default Contact;