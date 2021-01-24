import { Component } from "react"
import styled from 'styled-components';

const TopHeader = styled.header`
    display: flex; 
    flex-direction: row;
    white-space: nowrap;
    border-bottom: 1px solid black;
    box-sizing: content-box;
    padding: .5em;
    width: 100%;
`;

class Header extends Component {
    render(){
        return(
            <TopHeader>
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
            </TopHeader>
        )
    }
}

export default Header;