import { Component } from "react"
import styled from 'styled-components';

const TopHeaderBox = styled.header`
    display: flex; 
    flex-direction: row;
    white-space: nowrap;
    border-bottom: 1px solid black;
    box-sizing: content-box;
    padding: .5em;
    width: 100%;
`;

const TopText = styled.div`
    font-size: 1.3em;
    margin-left: 1vw;
`;

class Header extends Component {
    render(){
        return(
            <TopHeaderBox>
                <TopText>
                    Projects
                </TopText>
                <TopText>
                    Index
                </TopText>
                <TopText>
                    About Me
                </TopText>
                <TopText>
                    Contact
                </TopText>
            </TopHeaderBox>
        )
    }
}

export default Header;