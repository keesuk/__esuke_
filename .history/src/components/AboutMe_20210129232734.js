import { Component } from 'react';
import Draggable from 'react-draggable'

import { line_1, rainbow } from "./_Functions.jsx";


class AboutMe extends Component {
    
    render() {
        return (
            <Draggable defaultPosition={{x: 0, y: 0}}>
                <div
                    style={{
                        background: "yellow",
                        border: line_1,
                        boxShadow: ".5em .5em black",
                        width: "180px",
                        height: "180px",
                        margin: "10px",
                        padding: "10px",
                        float: "left",
                        position: "absolute",
                        zIndex: 100000,
                    }}>
                </div>
            </Draggable>
        );
    }
}


export default AboutMe;