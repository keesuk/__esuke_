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
    margin-left: 30vw;
    button: focus {
        outline:0;
    };
`;

const TopButton = styled.button`
    font-size: 1.3em;
    font-weight: 400;
    margin-right: 4vw;
    background-color: transparent;
    border: none;
`;

class Header extends Component {
    onMouseOver(){

    }

    render(){
        return(
            <TopHeaderBox>
                <TopButton onMouseOver={this.onMouseOver()}>
                    Projects
                </TopButton>
                <TopButton>
                    Index
                </TopButton>
                <TopButton>
                    About Me
                </TopButton>
                <TopButton>
                    Contact
                </TopButton>
            </TopHeaderBox>
        )
    }
}

export default Header;