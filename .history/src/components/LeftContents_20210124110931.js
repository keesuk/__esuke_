import { Component } from "react";
import styled from 'styled-components';
import { solid } from './_Functions.jsx';


const LeftContentsBox = styled.div`
    position: fixed;
    width: 30vw;
    height: 100vh;
    
    background-color: #EEE; 
    overflow: hidden;
`;

class LeftContents extends Component {
    render(){
        return(
            <LeftContentsBox>
                
            </LeftContentsBox>
        )
    }
}

export default LeftContents;