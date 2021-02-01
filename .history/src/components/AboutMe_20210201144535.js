import { useState } from 'react';
import Draggable from 'react-draggable'

import { line_2 } from "./_Functions.jsx";


function AboutMe() {
    const [hover, setHover] = useState(false)

    const divStyle = {
        background: "yellow",
        border: line_2,
        boxShadow: 
            (!hover && "6px 6px black") || 
            (hover && "6px 6px 6px rgba(0, 0, 0, .4)"),
        width: "180px",
        height: "180px",
        margin: "10px",
        padding: "10px",
        float: "left",
        position: "absolute"
    }

    const buttonStyle = {
        position: "absolute",
        zIndex: 
            (!hover && 1000) || 
            (hover && 10000),
    }

    return (
        <Draggable defaultPosition={{x: 0, y: 0}}>
            <button 
                style={buttonStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div style={divStyle}>
                </div>
            </button>
        </Draggable>
    );
}


export default AboutMe;