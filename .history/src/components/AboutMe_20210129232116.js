import { Component } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable'

import { line_1 } from "./_Functions.jsx";



const Modal = styled.div`
    background: yellow;
    
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
            <Draggable defaultPosition={{x: 0, y: 0}}>
                <Modal>
                    hi
                </Modal>
            </Draggable>
        );
    }
}


export default AboutMe;