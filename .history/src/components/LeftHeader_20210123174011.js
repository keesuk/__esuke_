import { Component } from "react";
import styled from 'styled-components';
import { solid } from './_Functions.jsx';


const LeftHeaderBox = styled.header`
    width: 30vw;
    height: 100vh;
    border-right: ${solid};
    box-sizing: content-box;
    display: flex;
    background-color: #EEE; 
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