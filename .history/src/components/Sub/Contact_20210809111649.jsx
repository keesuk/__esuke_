import { useState } from "react";
import Draggable from "react-draggable"

import theme from "../../css/_Theme.jsx";

const Contact = () => {

    const allStytle = {

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "white",
        boxShadow: `1rem 1rem 1rem rgba(0, 0, 0, .5)`,
        border: "1px solid black",
        width: "200px",
        height: "300px",
        padding: "10px",
        left: "15vw",
        bottom: "0",
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