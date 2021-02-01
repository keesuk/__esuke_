import { useState } from 'react';
import Draggable from 'react-draggable'
import styled from 'styled-components';

import { line_2 } from "./_Functions.jsx";


function AboutMe() {
    const [isShown, setIsShown] = useState(false)

    const styles = {
        background: "yellow",
        border: line_2,
        boxShadow: isShown && "6px 6px 6px black",
        width: "180px",
        height: "180px",
        margin: "10px",
        padding: "10px",
        float: "left",
        position: "absolute",
        zIndex: 100000,
    }

    return (
        <Draggable defaultPosition={{x: 0, y: 0}}>
            <button 
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                <div style={styles}>
                </div>
            </button>
        </Draggable>
    );
}


export default AboutMe;