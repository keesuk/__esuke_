import { Component } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable'

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
    z-index: 10000;
`;
class AboutMe extends Component {
    
    render() {
        return (
            <Draggable
                defaultPosition={{x: 200, y: 200}}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <Modal>
                    hi
                </Modal>
            </Draggable>
        );
    }
}

export default AboutMe;