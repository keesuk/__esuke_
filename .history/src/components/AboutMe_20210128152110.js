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
`;
class AboutMe extends Component {
  

    render(){
        return(
            <Draggable >
                <Modal style={{position: 'absolute', zIndex: '10000', bottom: '100px', right: '100px'}}>
                    I already have an absolute position.
                </Modal>
            </Draggable>
        )
    }
}

export default AboutMe;