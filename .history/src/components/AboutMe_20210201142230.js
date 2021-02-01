import { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable'

import { line_2 } from "./_Functions.jsx";


const AboutMe = () => {

    const styles = {
        background: "yellow",
        border: line_2,
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
            <div 
                style={{position: "absolute", zIndex: "10000"}}
                ref={ref}
                onMouseMove={ onMouseMove }
                onMouseDown={ () => setPressed(true) }
                onMouseUp={ () => setPressed(false) }
            >
                <div style={styles}>
                </div>
            </div>
        );
    }



export default AboutMe;