import { Component } from "react"
import styled from 'styled-components';

const TopHeader = styled.header`
    display: flex; 
    flex-direction: row;
    white-space: nowrap;
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