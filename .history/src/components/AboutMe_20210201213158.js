import { useState } from 'react';
import Draggable from 'react-draggable'

import { line_2 } from "./_Functions.jsx";


const AboutMe = ({num, value, order, close}) => {

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
    const closeStyle = {
        width: "40px",
        height: "40px",
        backgroundColor: "black",
    }

    const allStyle = {
        position: "absolute",
        zIndex: 
            (!drag && 1000 + value) || 
            (drag && 100000),
    }

    return (
        <Draggable 
            onStart={() => {
                order(num)
                setDrag(true)
            }}
            onStop={() => setDrag(false)}
            defaultPosition={{ x: num*20, y: num*20 }}>
            <div 
                style={allStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <button 
                    onClick={() => close(num)} 
                    style={closeStyle}
                />
                <div style={divStyle}>
                </div>
            </div>
        </Draggable>
    );
}


export default AboutMe;