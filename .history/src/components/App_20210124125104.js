import { Component } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';
import LeftContents from './LeftContents'
import { colorList, randomize, solid } from './_Functions.jsx';
import Contact from './Contact';

const Right = styled.div`
    margin-left: 30vw;
    top: 0;
`;
const TopHeaderBox = styled.header`
    display: flex; 
    position: fixed;
    flex-direction: row;
    white-space: nowrap;
    border-bottom: ${solid};
    background-color: white;
    box-sizing: content-box;
    padding-left: 2vw;    
    width: 68vw;
    height: 7vh;
`;
const TopButton = styled.button`
    font-size: 1.7em;
    margin-right: 4vw;
    font-weight: 400;
    
    &:hover {
        text-decoration-line: line-through;
        text-decoration-thickness: .15em;
        text-decoration-color: ${props => props.hoverColor};
    }
`;
const RightContents = styled.div`
    margin-top: 7vh;
    position: fixed;
    overflow: auto;
    padding-left: 2vw;
    height: 93vh;
`;
const LeftContentsBox = styled.div`
    position: fixed;
    width: 30vw;
    height: 100vh;
    border-right: ${solid};
    background-color: #EEE; 
    overflow: hidden;
`;

class App extends Component {
    state = {
        hoverColor: null
    }

    Hover(){
        this.setState({hoverColor: randomize(colorList)})
    }

    render(){
        smoothscroll.polyfill()
        const hoverColor = this.state.hoverColor

        return(
            <div>
                <Right>
                    <TopHeaderBox>
                        <TopButton 
                            onMouseOver={() => this.Hover()}
                            hoverColor={hoverColor}
                        >
                            Projects
                        </TopButton>
                        <TopButton>
                            About Me
                        </TopButton>
                        <TopButton 
                            onMouseOver={() => this.Hover()}
                            hoverColor={hoverColor}
                        >
                            Contact
                        </TopButton>
                    </TopHeaderBox>
                    <RightContents>
                        {Contact('black')}
                    </RightContents>
                </Right>
                <LeftContents/>
            </div>
        )
    }
}
export default App;
