import { Component } from "react";
import styled from 'styled-components';
import { solid } from './_Functions.jsx';


const LeftContentsBox = styled.div`
    width: 30vw;
    height: 100vh;
    border-right: ${solid};
    box-sizing: content-box;
    display: flex;
    background-color: #EEE; 
`;

class LeftContents extends Component {
    render(){
        return(
            <LeftContentsBox>
                <a>하이</a>
            </LeftContentsBox>
        )
    }
}

export default LeftContents;