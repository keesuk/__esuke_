import { Component } from "react";
import styled from 'styled-components';

const LeftHeaderBox = styled.header`
    width: 30vw;
    height: 100vh;
    border-right: .1em solid black;
    box-sizing: content-box;
    display: flex;
    background-color: #999; 
`;

class LeftHeader extends Component {
    render(){
        return(
            <LeftHeaderBox>
                
            </LeftHeaderBox>
        )
    }
}

export default LeftHeader;