import { useState } from "react";
import Draggable from "react-draggable"

import theme from "../../css/_Theme.jsx";


const AboutMe = ({ num, value, order, img, width, close, borColor, color, content, X, Y}) => {
    
    const [hover, setHover] = useState(false)
    const [drag, setDrag] = useState(false)
    const vValue = 1000 + value
    const xy = num * 45 + 50
    
    const divStyle = {
        position: "absolute",
        padding: "1rem",
        float: "left",
        left: "29vw",
        width: width,
        height: width,
        border: `${theme.lines["postItContentLine"]} ${borColor}`,
        borderColor: borColor,
        backgroundColor: color,
        boxShadow: 
            (!hover && ".5rem .5rem .5rem rgba(0, 0, 0, .5)") || 
            (hover && 
                ((!drag && ".6rem .6rem .6rem rgba(0, 0, 0, .4)") ||
                (drag && ".6rem .6rem .7rem rgba(0, 0, 0, .3)"))),
    }

    const allStyle = {
        position: "absolute",
        animationName: "effect",
        animationIterationCount: 1,
        animationDuration: `.${num}s`,
        zIndex: 
            (!drag && vValue) || 
            (drag && 100000),
    }

    const handleDrag = (e, ui) => {
        console.log(ui, e.screenY)
        if(e.screenX > X && e.screenY < Y) close(num)
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
                x: xy + 80,
                y: xy + 200
            }}>
            <div 
                style={allStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            > 
                <div style={divStyle}>
                    {content}
                </div>
            </div>
        </Draggable>
    );
}


export default AboutMe;