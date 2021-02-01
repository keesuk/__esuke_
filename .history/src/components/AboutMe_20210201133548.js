import { Component } from 'react';
import Draggable from 'react-draggable'
import styled from 'styled-components';

import { line_2 } from "./_Functions.jsx";

const Styles = styled.div`
    box {
        background: "yellow",
        border: ${line_2},
        boxShadow: "6px 6px black",
        width: "180px",
        height: "180px",
        margin: "10px",
        padding: "10px",
        float: "left",
        position: "absolute",
        zIndex: 100000,
    }
`;

class AboutMe extends Component {
    
    render() {
        return (
            <Styles>
                <Draggable defaultPosition={{x: 0, y: 0}}>
                    <div className="box">
                    </div>
                </Draggable>
            </Styles>
        );
    }
}


export default AboutMe;