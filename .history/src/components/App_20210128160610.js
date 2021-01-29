import { Component } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';
import { colorList, randomize, line_1 } from './_Functions.jsx';
import Projects from './Projects';
import Contact from './Contact';
import AboutMe from './AboutMe';

const Right = styled.div`
    margin-left: 30vw;
    top: 0;
`;
const TopHeaderBox = styled.header`
    display: flex; 
    position: fixed;
    z-index: 100;
    flex-direction: row;
    white-space: nowrap;
    border-left: ${line_1};
    border-bottom: ${line_1};
    background-color: white;
    box-sizing: content-box;
    justify-content: center;
    align-items: center;
    width: 70vw;
    height: 7vh;
`;
const TopButton = styled.button`
    font-size: 1.3em;
    margin-right: 4vw;
    font-weight: 500;
    letter-spacing: -.01em;

    &:after { 
        content: "";
        position: absolute;
        border-top: 0.25em solid ${props => props.color};
        height: 95%;
        width: 100%;
        transform: translateY(50%);
        visibility: hidden;
    }
    &:hover:after { 
        visibility: visible;
    }
`;
const RightContents = styled.div`
    border-left: ${line_1};
    margin-top: 7vh;
    position: fixed;
    z-index: 50;
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
    background-color: #EEE; 
    overflow: hidden;
`;
const Index = styled.div`
    top: 0;
    right: 0;
    float: right;
`;
const IndexContent = styled.div`
    width: 2em;
    height: 2em;
    background-color: ${props => props.color};
    
    &:hover {
        height: 4em;
        transition: all .3s ease;
    }
    .text {
        right: 2em;
        padding-right: .5em;
        position: absolute;
        opacity: 0;
        text-align: center;
    }
    &:hover .text {
        opacity: 1;
        transition: all .08s ease;
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
                {/* <AboutMe/> */}
                <Right>
                    <TopHeaderBox>
                        <TopButton 
                            onMouseOver={() => this.Hover()} 
                            hoverColor={hoverColor}
                        >
                            Home
                        </TopButton>
                        {/* <TopButton
                            weight={400}
                        >
                            About Me
                        </TopButton>
                        <TopButton
                            weight={400}
                        >
                            Contact
                        </TopButton> */}
                    </TopHeaderBox>
                    <RightContents>
                        {Projects()}
                        {Contact()}
                    </RightContents>
                </Right>
                <Left>
                    <Index>
                        <IndexContent color={randomize(colorList)}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={randomize(colorList)}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={randomize(colorList)}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={randomize(colorList)}>
                            <span className='text'>contents</span>
                        </IndexContent>
                    </Index>
                </Left>
            </div>
        )
    }
}
export default App;
