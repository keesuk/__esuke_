import { Component } from "react";
import styled from 'styled-components';

const LeftHeaderBox = styled.div`
    width: 36vw;
    height: 100vh;
    border-right: .1em solid black;
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