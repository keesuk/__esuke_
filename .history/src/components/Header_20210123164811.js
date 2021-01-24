import { Component } from "react";
import styled from 'styled-components';
import colorList from './_Functions.jsx';


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
`;

const TopButton = styled.button`
    font-size: 1.3em;
    font-weight: 400;
    margin-right: 4vw;
`;

class Header extends Component {
    onMouseOver(){

    }

    render(){
        console.log(colorList)
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