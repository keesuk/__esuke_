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
            (!hover && "5px 5px 8px rgba(0, 0, 0, .8)") || 
            (hover && 
                ((!drag && "6px 6px 8px rgba(0, 0, 0, .6)") ||
                (drag && "6px 6px 10px rgba(0, 0, 0, .4)"))),
    }

    const tapeStyle = {
        position: "absolute",
        transform: `rotate(${tape && tape.angle}deg)`,
        marginTop: "-40px",
        width: "40px",
        height: "80px",
        marginLeft: tape && tape.length,
        backgroundColor: tape && tape.color,
        borderTop: `4px dotted ${tape && tape.color}`,
        borderBottom: `4px dotted ${tape && tape.color}`,
        zIndex: vValue + 1,
        opacity: 
            (!hover && "1") || (hover && ".8")
    }

    const allStyle = {
        position: "absolute",
        zIndex: 
            (!drag && vValue) || 
            (drag && 100000),
    }

    const handleDrag = (e, ui) => {
        console.log(ui)
    }

    return (
        <Draggable 
            onStart={() => {
                order(num)
                setDrag(true)
            }}
            onDrag={handleDrag}
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