import Draggable from "react-draggable"
import { useState } from "react"

import theme from "../../css/_Theme.jsx"


const AboutMe = ({ num, zValue, order, img, width, close, borColor, color, content, X, Y}) => {
    
    const [hover, setHover] = useState(false)
    const [drag, setDrag] = useState(false)
    const [opa, setOpa] = useState(false)

    const xy = num * 45 + 50
    const x = img !== null ? xy : xy + 100
    const y = img !== null ? xy : xy + 200
    const zIndexing = 99 + zValue
    
    const divStyle = {
        boxShadow: 
            (!hover && ".2rem .2rem .9rem rgba(0, 0, 0, .5)") || 
            (hover && 
                ((!drag && ".3rem .3rem 1.1rem rgba(0, 0, 0, .4)") ||
                (drag && ".3rem .3rem 1.2rem rgba(0, 0, 0, .3)"))),
        cursor: (drag 
            ? "grabbing" 
            : "grab"
        ),
        borderTop: `${theme.lines["postItContentLine"]} rgba(255, 255, 255, 0.3)`,
        borderLeft: `${theme.lines["postItContentLine"]} rgba(255, 255, 255, 0.3)`,
        backgroundColor: color,
        height: width,
        width: width,
        position: "absolute",
        padding: "1rem",
        float: "left",
        left: "29vw",
    }

    const allStyle = {
        zIndex: 
            (!drag && zIndexing) || 
            (drag && 100000),
        opacity: opa 
            ? "0.8" 
            : "",
        animationIterationCount: "1",
        animationDuration: num+"s",
        animationName: "effect",
        position: "absolute",
    }

    const startDrag = () => {
        setDrag(true)
        order(num)
    }

    const handleDrag = (e, ui) => {
        if(e.clientX > X && e.clientY < Y) setOpa(true)
        else setOpa(false)
    }

    const stopDrag = () => {
        if (opa === true) close(num)
        setDrag(false)
    }

    return (
        <Draggable 
            defaultPosition={{ x: x, y: y}}
            onStart={startDrag}
            onDrag={handleDrag}
            onStop={stopDrag}
        >
            <div 
                onMouseLeave={() => setHover(false)}
                onMouseEnter={() => setHover(true)}
                style={allStyle}
            > 
                <div style={divStyle}>
                    {content}
                </div>
            </div>
        </Draggable>
    )
}


export default AboutMe
