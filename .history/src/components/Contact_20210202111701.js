import { useState } from 'react';
import Draggable from 'react-draggable'
import { line_1, redS, paperTexture } from "./_Functions.jsx";

const Contact = ({}) => {

    const allStytle = {
        backgroundImage: `url(${paperTexture})` ,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: `.5em .5em ${redS(1)}`,
        border: line_1,
        borderColor: redS(1),
        width: "500px",
        height: "700px",
        padding: "10px",
        float: "left",
        position: "absolute",
        zIndex: 100000,
    }
        
    return (
        <Draggable 
            defaultPosition={{x: document.body.clientWidth - 560 , y: 600}}
        >
            <div
                style={allStytle}>
            </div>
        </Draggable>
    );
}


export default Contact;