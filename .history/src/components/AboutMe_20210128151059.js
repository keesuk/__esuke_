import { Component } from 'react';
import Draggable from 'react-draggable'

class AboutMe extends Component {

    render(){
        return(
            <Draggable {...dragHandlers}>
                <div className="box" style={{position: 'absolute', bottom: '100px', right: '100px'}}>
                I already have an absolute position.
                </div>
            </Draggable>
        )
    }
}

export default AboutMe;