import { Component } from "react";
import styled from 'styled-components';

const TopHeaderBox = styled.header`
    display: flex; 
    position: fixed;
    flex-direction: row;
    white-space: nowrap;
    border-bottom: .1em solid black;
    box-sizing: content-box;
    padding: .5em;
    width: 70vw;
`;

const TopText = styled.div`
    font-size: 1.3em;
    font-weight: 400;
    margin-right: 4vw;
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