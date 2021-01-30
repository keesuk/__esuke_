import { Component } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable'

import { line_1, rainbow } from "./_Functions.jsx";



const aboutMeDiv = styled.div`
    background: yellow;
    border: ${line_1};
    box-shadow: .5em .5em black;
    width: 180px;
    height: 180px;
    margin: 10px;
    padding: 10px;
    float: left;
    position: absolute;
    z-index: 100000;
`;

class AboutMe extends Component {
    
    render() {
        return (
            <aboutMeDiv>
                <Draggable defaultPosition={{x: 0, y: 0}}>
                    <div>
                        hi
                    </div>
                </Draggable>
            </aboutMeDiv>
        );
    }
}


export default AboutMe;