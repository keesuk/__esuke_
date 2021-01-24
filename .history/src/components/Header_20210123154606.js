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
    margin-left: .2vw;
`;

class Header extends Component {
    render(){
        return(
            <TopHeaderBox>
                <div>
                    Projects
                </div>
                <div>
                    Index
                </div>
                <div>
                    About Me
                </div>
                <div>
                    Contact
                </div>
            </TopHeaderBox>
        )
    }
}

export default Header;