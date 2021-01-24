import { Component } from "react";
import styled from 'styled-components';
import { colorList, randomize } from './_Functions.jsx';


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
    
    &:hover {
        text-decoration-line: line-through;
        text-decoration-thickness: .2em;
        text-decoration-color: ${props => props.hoverColor};
    }
`;

class Header extends Component {
    state = {
        hoverColor: 'transparent'
    }

    Hover(){
        this.setState({hoverColor: randomize(colorList)})
    }

    render(){
        return(
            <TopHeaderBox>
                <TopButton 
                    onMouseOver={() => this.Hover()}
                    hoverColor={this.state.hoverColor}
                >
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