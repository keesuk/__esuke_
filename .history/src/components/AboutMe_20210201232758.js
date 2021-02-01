import { useState } from 'react';
import Draggable from 'react-draggable'

import { line_2 } from "./_Functions.jsx";



const AboutMe = ({num, value, order, tape, width, close, borColor, color}) => {
    
    const [hover, setHover] = useState(false)
    const [drag, setDrag] = useState(false)
    const vValue = 1000 + value
    const xy = num * 45 + 50

    const divStyle = {
        position: "absolute",
        padding: "10px",
        float: "left",
        backgroundColor: color,
        width: width,
        height: width,
        border: line_2,
        borderColor: borColor,
        boxShadow: 
            (!hover && `4px 4px ${borColor}`) || 
            (hover && 
                ((!drag && "6px 6px 6px rgba(0, 0, 0, .6)") ||
                (drag && "6px 6px 10px rgba(0, 0, 0, .4)"))),
    }

    const tapeStyle = {
        position: "absolute",
        transform: "rotate(30deg)",
        marginTop: "-20px",
        width: "30px",
        height: "60px",
        marginLeft: tape&&tape.length,
        backgroundColor: tape&&tape.color,
        zIndex: vValue,
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
            defaultPosition={{ 
                x: tape!== null ? xy : xy + 80,
                y: tape!== null ? xy : xy + 200
            }}>
            <div 
                style={allStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                > 
                {tape !== null ? <div style={tapeStyle}/>: null}
                <div style={divStyle}></div>
            </div>
        </Draggable>
    );
}


export default AboutMe;