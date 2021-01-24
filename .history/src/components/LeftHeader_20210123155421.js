import { Component } from "react";
import styled from 'styled-components';

const LeftHeaderBox = stlyed.div`
    width: 36vw;
    border-bottom: .1em solid black;
    box-sizing: content-box;
    display: flex; 
`;

class LeftHeader extends Component {
    render(){
        return(
            <LeftHeaderBox>
                하이
            </LeftHeaderBox>
        )
    }
}

export default LeftHeader;