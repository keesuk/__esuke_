import { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable'

import { line_2 } from "./_Functions.jsx";


const AboutMe = () => {
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
        zIndex: 100000,
    }


        const [pressed, setPressed] = useState(false)
        const [position, setPosition] = useState({x: 0, y: 0})
        const ref = useRef()

        useEffect(() => {
            if(ref.current) {
                ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
            }
        }, [position])

        const onMouseMove = (event) => {
            if(pressed) {
                setPosition({
                    x: position.x + event.movementX,
                    y: position.y + event.movementY
                })
            }
        }

        return (
            <button 
                style={{position: "absolute", zIndex: "10000"}}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onMouseMove={ onMouseMove }
                onMouseDown={ () => setPressed(true) }
                onMouseUp={ () => setPressed(false) }
            >
                <div style={styles}>
                </div>
            </button>
        );
    }



export default AboutMe;