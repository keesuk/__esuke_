import { useState } from "react";
import Draggable from "react-draggable"

import theme from "../../css/_Theme.jsx";


const AboutMe = ({ num, zValue, order, img, width, close, borColor, color, content, X, Y}) => {
    
    const [hover, setHover] = useState(false)
    const [drag, setDrag] = useState(false)
    const [opa, setOpa] = useState(false)

    const zIndexing = 1000 + zValue
    const xy = num * 45 + 50
    const x = img !== null ? xy : xy + 100
    const y = img !== null ? xy : xy + 200
    
    const divStyle = {
        position: "absolute",
        padding: "1rem",
        float: "left",
        left: "29vw",
        width: width,
        height: width,
        borderTop: `${theme.lines["postItContentLine"]} rgba(255, 255, 255, 0.5)`,
        borderLeft: `${theme.lines["postItContentLine"]} rgba(255, 255, 255, 0.5)`,
        borderBottom: `${theme.lines["postItContentLine"]} ${borColor}`,
        borderRight: `${theme.lines["postItContentLine"]} ${borColor}`,
        borderColor: borColor,
        backgroundColor: color,
        boxShadow: 
            (!hover && ".1rem .1rem .7rem rgba(0, 0, 0, .5)") || 
            (hover && 
                ((!drag && ".2rem .2rem .8rem rgba(0, 0, 0, .4)") ||
                (drag && ".2rem .2rem .9rem rgba(0, 0, 0, .3)"))),
    }

    const allStyle = {
        position: "absolute",
        opacity: opa === true ? "0.8" : "",
        animationName: "effect",
        animationIterationCount: 1,
        animationDuration: `.${num}s`,
        zIndex: 
            (!drag && zIndexing) || 
            (drag && 100000),
    }

    const startDrag = () => {
        order(num)
        setDrag(true)
    }

    const handleDrag = (e, ui) => {
        if(e.clientX > X && e.clientY < Y) setOpa(true)
        else setOpa(false)
    }

    const stopDrag = () => {
        setDrag(false)
        if (opa === true) close(num)
    }

    return (
        <Draggable 
            onStart={startDrag}
            onDrag={handleDrag}
            onStop={stopDrag}
            defaultPosition={{ x: x, y: y}}
        >
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
