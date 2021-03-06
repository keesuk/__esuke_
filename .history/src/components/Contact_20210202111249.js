import { useState } from 'react';
import Draggable from 'react-draggable'
import { line_1, redS } from "./_Functions.jsx";

const Contact = ({}) => {
        
    return (
        <Draggable 
            defaultPosition={{x: document.body.clientWidth - 560 , y: 600}}
        >
            <div
                style={{
                    backgroundImage: `url(${"https://media.istockphoto.com/photos/paper-texture-background-picture-id667786998?b=1&k=6&m=667786998&s=612x612&w=0&h=8lcKr0m8Vs8JUUHGa7Dz7CZa5ln-xsD5on7nLFKRg8c="})` ,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    boxShadow: `.5em .5em ${redS(1)}`,
                    border: line_1,
                    borderColor: redS(1),
                    width: "500px",
                    height: "700px",
                    padding: "10px",
                    float: "left",
                    position: "absolute",
                    zIndex: 100000,
                }}>
            </div>
        </Draggable>
    );
}


export default Contact;