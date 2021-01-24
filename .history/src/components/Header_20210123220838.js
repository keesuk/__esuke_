import { Component } from "react";
import styled from 'styled-components';
import { colorList, randomize, solid } from './_Functions.jsx';


const TopHeaderBox = styled.header`
    display: flex; 
    position: fixed;
    flex-direction: row;
    white-space: nowrap;
    border-left: ${solid};
    border-bottom: ${solid};
    background-color: white;
    box-sizing: content-box;
    padding: .5em;
    width: 70vw;
    margin-left: 30vw;
`;

const TopButton = styled.button`
    -webkit-tap-highlight-color: black;
    font-size: 1.7em;
    margin-right: 4vw;
    font-weight: 400;
    
    &:hover {
        text-decoration-line: line-through;
        text-decoration-thickness: .15em;
        text-decoration-color: ${props => props.hoverColor};
    }
`;

class Header extends Component {
    state = {
        hoverColor: null
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
                    About Me
                </TopButton>
                <TopButton 
                    onMouseOver={() => this.Hover()}
                    hoverColor={this.state.hoverColor}
                >
                    Contact
                </TopButton>
            </TopHeaderBox>
        )
    }
}

export default Header;