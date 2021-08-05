import { useState } from "react";
import Draggable from "react-draggable"

import theme from "../../css/_Theme.jsx";


const AboutMe = ({ num, value, order, tape, width, close, borColor, color}) => {
    
    const [hover, setHover] = useState(false)
    const [drag, setDrag] = useState(false)
    const vValue = 1000 + value
    const xy = num * 45 + 50
    
    const divStyle = {
        position: "absolute",
        padding: "1rem",
        float: "left",
        width: width,
        height: width,
        border: `${theme.lines["postItContentLine"]} ${borColor}`,
        borderColor: borColor,
        backgroundColor: color,
        boxShadow: 
            (!hover && ".5rem .5rem .7rem rgba(0, 0, 0, .8)") || 
            (hover && 
                ((!drag && ".6rem .6rem .8rem rgba(0, 0, 0, .6)") ||
                (drag && ".6rem .6rem 1rem rgba(0, 0, 0, .4)"))),
    }

    const tapeStyle = {
        position: "absolute",
        marginTop: "-2.5rem",
        width: "2.5rem",
        height: "5rem",
        borderTop: `.2rem dotted ${tape && tape["color"]}`,
        borderBottom: `.2rem dotted ${tape && tape["color"]}`,
        transform: `rotate(${tape && tape["angle"]}deg)`,
        marginLeft: tape && tape["length"],
        backgroundColor: tape && tape["color"],
        zIndex: vValue + 1,
        opacity: 
            (!hover && "1") || (hover && ".8")
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
        const X = document.body.clientWidth-200
        const Y = window.innerHeight-400

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