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
    state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };
  
    handleDrag = (e, ui) => {
      const {x, y} = this.state.deltaPosition;
      this.setState({
        deltaPosition: {
          x: x + ui.deltaX,
          y: y + ui.deltaY,
        }
      });
    };
  
    onStart = () => {
      this.setState({activeDrags: ++this.state.activeDrags});
    };
  
    onStop = () => {
      this.setState({activeDrags: --this.state.activeDrags});
    };
  
    // For controlled component
    adjustXPos = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const {x, y} = this.state.controlledPosition;
      this.setState({controlledPosition: {x: x - 10, y}});
    };
  
    adjustYPos = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const {controlledPosition} = this.state;
      const {x, y} = controlledPosition;
      this.setState({controlledPosition: {x, y: y - 10}});
    };
  
    onControlledDrag = (e, position) => {
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    };
  
    onControlledDragStop = (e, position) => {
      this.onControlledDrag(e, position);
      this.onStop();
    };
  

    render(){
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const {deltaPosition, controlledPosition} = this.state;
        return(
            <Draggable {...dragHandlers}>
                <Modal style={{position: 'absolute', bottom: '100px', right: '100px'}}>
                    I already have an absolute position.
                </Modal>
            </Draggable>
        )
    }
}

export default AboutMe;