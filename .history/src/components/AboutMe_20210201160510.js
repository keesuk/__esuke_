import { useState } from 'react';
import Draggable from 'react-draggable'

import { line_2 } from "./_Functions.jsx";


const AboutMe = (num) => {
    const [hover, setHover] = useState(false)
    const [drag, setDrag] = useState(false)

    const divStyle = {
        background: "yellow",
        border: line_2,
        boxShadow: 
            (!hover && "6px 6px black") || 
            (hover && 
                ((!drag && "6px 6px 6px rgba(0, 0, 0, .7)") ||
                (drag && "6px 6px 10px rgba(0, 0, 0, .4)"))),
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
            (!drag && 1000) || 
            (drag && 100000),
    }
    console.log(num)

    return (
        <Draggable 
            onStart={() => {
                setDrag(true)
            }}
            onStop={() => setDrag(false)}
            defaultPosition={{x: 0, y: 0}}>
            <button 
                draggable="true"
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