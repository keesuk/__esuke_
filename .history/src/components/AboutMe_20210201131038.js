import { Component } from 'react';
import Draggable from 'react-draggable'

import { line_2 } from "./_Functions.jsx";

const styling = {
    background: "yellow",
    border: line_2,
    boxShadow: "6px 6px black",
    width: "180px",
    height: "180px",
    margin: "10px",
    padding: "10px",
    float: "left",
    position: "absolute",
    zIndex: 100000,

    "&:hover": {
        boxShadow: "6px 6px 6px rgba(0, 0, 0, .3)",
    }
}

class AboutMe extends Component {
    
    render() {
        return (
            <Draggable defaultPosition={{x: 0, y: 0}}>
                <div
                    style={styling}>
                </div>
            </Draggable>
        );
    }
}


export default AboutMe;