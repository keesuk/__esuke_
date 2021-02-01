import { Component } from 'react';
import Draggable from 'react-draggable'

import { line_2 } from "./_Functions.jsx";


class Contact extends Component {

    handleDrag = (e , ui) => {
        console.log(e, ui)
    }
    
    render() {
        return (
            <Draggable 
                defaultPosition={{x: 600, y: 600}}
                onDrag={this.handleDrag}
            >
                <div
                    style={{
                        backgroundImage: `url(${"https://img.freepik.com/free-photo/watercolor-paper-texture_1194-2324.jpg?size=626&ext=jpg"})` ,
                        border: line_2,
                        boxShadow: ".5em .5em black",
                        width: "400px",
                        height: "100%",
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