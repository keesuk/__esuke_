import { useState } from 'react';
import Draggable from 'react-draggable'

import { line_2 } from "./_Functions.jsx";


const AboutMe = ({num, value, order, close, color}) => {

    const [hover, setHover] = useState(false)
    const [drag, setDrag] = useState(false)
    const vValue = 1000 + value

    const divStyle = {
        background: color,
        border: line_2,
        boxShadow: 
            (!hover && "4px 4px 4px rgba(0, 0, 0, .5)") || 
            (hover && 
                ((!drag && "6px 6px 6px rgba(0, 0, 0, .7)") ||
                (drag && "6px 6px 10px rgba(0, 0, 0, .4)"))),
        width: "180px",
        height: "180px",
        padding: "10px",
        float: "left",
        position: "absolute"
    }
    const tapeStyle = {
        position: "absolute",
        zIndex: vValue,
        marginTop: "-20px",
        marginLeft: "60px",
        width: "5px",
        height: "50px",
        backgroundColor: "black",
    }
    const allStyle = {
        position: "absolute",
        zIndex: 
            (!drag && vValue) || 
            (drag && 100000),
    }

    return (
        <Draggable 
            onStart={() => {
                order(num)
                setDrag(true)
            }}
            onStop={() => setDrag(false)}
            defaultPosition={{ x: 20 + num*50, y: 20 + num*50 }}>
            <div 
                style={allStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div style={tapeStyle}/>
                <div style={divStyle}></div>
            </div>
        </Draggable>
    );
}


export default AboutMe;