import { Component } from 'react';
import Draggable from 'react-draggable'
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

import { line_2 } from "./_Functions.jsx";

const styles = {
    root: {
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
    }
}

class AboutMe extends Component {
    
    render() {
        return (
            <Draggable defaultPosition={{x: 0, y: 0}}>
                <Button className={this.props.classes.root}>
                </Button>
            </Draggable>
        );
    }
}


export default withStyles(styles)(AboutMe);