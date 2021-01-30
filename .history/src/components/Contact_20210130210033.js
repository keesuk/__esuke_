import { Component } from 'react';
import Draggable from 'react-draggable'

import { line_1 } from "./_Functions.jsx";


class Contact extends Component {

    handleDrag = (e , ui) => {
        console.log(e, ui)
    }
    
    render() {
        return (
            <Draggable 
                defaultPosition={{x: 50, y: 50}}
                onDrag={this.handleDrag}
            >
                <div
                    style={{
                        background: "white",
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


export default Contact;