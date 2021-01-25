import { Component } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';
import { colorList, randomize, line_1 } from './_Functions.jsx';
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
    border-bottom: ${line_1};
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
    width: 66vw;
    overflow: auto;
    padding-left: 2vw;
    padding-right: 2vw;
    height: 93vh;
`;
const Left = styled.div`
    position: fixed;
    width: 30vw;
    height: 100vh;
    top: 0;
    border-right: ${line_1};
    background-color: #EEE; 
    overflow: hidden;
`;
const Index = styled.div`
    top: 0;
    width: 2em;
    right: 0;
    float: right;
`;
const IndexContent = styled.div`
    width: 3em;
    height: 2em;
    background-color: ${props => props.color};
    
    &:hover {
        height: 6em;
        transition: all .3s ease;
    }
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
                <Left>
                    <Index>
                        <IndexContent color={randomize(colorList)}/>
                        <IndexContent color={randomize(colorList)}/>
                        <IndexContent color={randomize(colorList)}/>
                        <IndexContent color={randomize(colorList)}/>
                        <IndexContent color={randomize(colorList)}/>
                        <IndexContent color={randomize(colorList)}/>
                        <IndexContent color={randomize(colorList)}/>
                    </Index>
                </Left>
            </div>
        )
    }
}
export default App;
