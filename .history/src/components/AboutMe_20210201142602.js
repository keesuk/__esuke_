import { useState } from 'react';
import Draggable from 'react-draggable'

import { line_2 } from "./_Functions.jsx";


function AboutMe() {
    const [hover, setHover] = useState(false)

    const styles = {
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
        position: "absolute",
        zIndex: 
            (!hover && "100") || 
            (hover && "1000"),
    }

    return (
        <Draggable defaultPosition={{x: 0, y: 0}}>
            <button 
                style={{position: "absolute", zIndex: "10000"}}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div style={styles}>
                </div>
            </button>
        </Draggable>
    );
}


export default AboutMe;