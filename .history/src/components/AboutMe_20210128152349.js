import { Component } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable'

const Modal = styled.div`
    background: #fff;
    border: 1px solid #999;
    border-radius: 3px;
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
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <Modal>
                <div className="handle">Drag from here</div>
                <div>This readme is really dragging on...</div>
                </Modal>
            </Draggable>
        );
    }
}

export default AboutMe;