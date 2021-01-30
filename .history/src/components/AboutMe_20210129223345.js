import { Component } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable'


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

const Modal = styled.div`
    background: yellow;
    border: .15em solid black;
    box-shadow: .5em .5em black;
    width: 180px;
    height: 180px;
    margin: 10px;
    padding: 10px;
    float: left;
    position: absolute;
    z-index: 100000;
`;

export default AboutMe;