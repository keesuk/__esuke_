import { Component } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';
import { colorList, randomize, solid } from './_Functions.jsx';
import Projects from './Projects';
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
    padding-top: .2em;
    padding-bottom: .2em;
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
const Left = styled.div`
    position: fixed;
    width: 30vw;
    height: 100vh;
    top: 0;
    border-right: ${solid};
    background-color: #EEE; 
    overflow: hidden;
`;
const Index = styled.div`
    top: 0;
    left: 0;
    width: 10vw;
    height: 100vh;
    background-color: white;
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
                        <TopButton onMouseOver={() => this.Hover()} hoverColor={hoverColor}>
                            Projects
                        </TopButton>
                        <TopButton>
                            About Me
                        </TopButton>
                        <TopButton>
                            Contact
                        </TopButton>
                    </TopHeaderBox>
                    <RightContents>
                        {Projects()}
                        {Contact()}
                    </RightContents>
                </Right>
                <Index>

                </Index>
                <Left/>
            </div>
        )
    }
}
export default App;
