import { Component } from 'react';
import Draggable from 'react-draggable'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import { line_2 } from "./_Functions.jsx";

const styling = theme => ({
    background: "yellow",
    border: line_2,
    boxShadow: "6px 6px black",
    width: "180px",
    height: "180px",
    margin: "10px",
    padding: "10px",
    float: "left",
    position: "absolute",
    zIndex: 100000,

    "&:hover": {
        boxShadow: "6px 6px 6px black",
    }
})

class AboutMe extends Component {
    
    render() {
        return (
            <Draggable defaultPosition={{x: 0, y: 0}}>
                <MuiThemeProvider>
                    <div
                        style={styling}>
                    </div>
                </MuiThemeProvider>
            </Draggable>
        );
    }
}


export default withStyles(styling)(AboutMe);