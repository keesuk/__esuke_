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
    border-left: ${line_1};
    border-bottom: ${line_1};
    background-color: white;
    width: 70vw;
    height: 3.5em;

    &:after { 
        content: "";
        position: absolute;
        left: 35%;
        right: 35%;
        border-top: 0.13em solid ${props => props.hoverColor};
        height: 100%;
        width: 30%;
        transform: translateY(50%);
        visibility: hidden;
    }
    &:hover:after { 
        visibility: visible;
    }
`;
const TopButton = styled.button`
    font-size: 1.3em;
    font-weight: 500;
    width: 100%;
    text-align: center;
    letter-spacing: -.01em;
`;
const RightContents = styled.div`
    border-left: ${line_1};
    margin-top: 3.5em;
    position: fixed;
    z-index: 50;
    width: 66vw;
    overflow: auto;
    padding-left: 2vw;
    padding-right: 2vw;
    height: 100%;
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
    margin-top: 3.6em;
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
const Menu = styled.div`
    position: fixed;
    bottom: 4em;
    margin-left: -1em;

    .postIt {
        background-color: yellow;
        width: 12em;
        text-align: center;
        padding-top: .7em;
        padding-bottom: .7em;
        border: .1em solid black;
        box-shadow: 0em .5em black;
        
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
                    <TopHeaderBox
                        hoverColor={hoverColor}
                        onMouseOver={() => this.Hover()}
                    >
                        <TopButton>
                            Home
                        </TopButton>
                    </TopHeaderBox>
                    <RightContents>
                        {Projects()}
                        {Contact()}
                    </RightContents>
                </Right>
                <Left>
                    <Index>
                        <IndexContent color={'#999'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#555'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#333'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#444'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#999'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#666'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#888'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#555'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#333'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#777'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                    </Index>
                    <Menu>
                        <div className="postIt">About Me</div>
                    </Menu>
                </Left>
            </div>
        )
    }
}
export default App;
