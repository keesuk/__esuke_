import { useState } from "react";
import Draggable from "react-draggable"

import theme from "../../css/_Theme.jsx";

const Contact = ({prfFront, prfBack}) => {

    const allStytle = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "white",
        boxShadow: `.5rem .5rem 1rem rgba(0, 0, 0, .5)`,
        width: "calc(325px *1.2)",
        height: "calc(200px *1.2)",
        left: "16vw",
        bottom: "0vw",
        position: "absolute",
        zIndex: 100000,
    }

    return (
        <div style={allStytle}>
            {prfFront}
        </div>
    );
}


export default Contact;