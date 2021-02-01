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
                defaultPosition={{x: document.body.clientWidth/2 , y: 600}}
                onDrag={this.handleDrag}
            >
                <div
                    style={{
                        backgroundImage: `url(${"https://images.unsplash.com/photo-1577457414247-e859d9765892?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"})` ,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        boxShadow: ".5em .5em rgba(0, 0, 0, 1)",
                        border: "3px solid black",
                        width: "50vw",
                        height: "100%",
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