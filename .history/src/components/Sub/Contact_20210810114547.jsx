import { useState } from "react";
import Draggable from "react-draggable"

import theme from "../../css/_Theme.jsx";

const Contact = ({prfFront, prfBack}) => {

    const allStyle = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "white",
        boxShadow: `.5rem .5rem 1rem rgba(0, 0, 0, .5)`,
        width: "calc(325px *1.5)",
        height: "calc(200px *1.5)",
        left: "16vw",
        bottom: "0vw",
        position: "absolute",
        zIndex: 100000,
    }

    const imgStyle = {
        display: "block",
        height: "auto",
        width: "100%",
    }

    return (
        <div style={allStyle}>
            <img style={imgStyle} alt="" src={prfFront}/>
        </div>
    );
}

export default Contact;