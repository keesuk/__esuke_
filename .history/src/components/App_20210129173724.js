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
        background: linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet);
        height: .12em;
        width: 30%;
        margin-top: 1.75em;
        visibility: hidden;
    }
    &:hover:after { 
        visibility: visible;
    }
    button {
        font-size: 1.3em;
        font-weight: 500;
        width: 100%;
        text-align: center;
        letter-spacing: -.01em;
    }
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
        transition: all .2s ease;
    }
    span {
        right: 2em;
        padding-right: .5em;
        position: absolute;
        opacity: 0;
        text-align: center;
    }
    &:hover span {
        opacity: 1;
        transition: all .08s ease;
    }
`;
const Menu = styled.div`
    position: fixed;
    bottom: 4em;
    margin-left: -2em;

    button {
        display: flex;
        font-weight: 400;
        font-size: .9em;
        letter-spacing: -.05em;
        width: 12em;
        padding-top: .7em;
        padding-bottom: .7em;
        padding-left: 1em;
        margin-top: 1.5em;
        border: .1em solid black;
        box-shadow: .3em .3em black;
        
        &:hover {
            text-decoration-line: line-through;
            text-decoration-thickness: .15em;
            text-decoration-color: black;
            box-shadow: .6em .6em .6em grey;
            transition: all .02s ease;
        }
    }
`;

class App extends Component {
    render(){
        smoothscroll.polyfill()

        return(
            <div>
                {/* <AboutMe/> */}
                <Right>
                    <TopHeaderBox>
                        <button>Home</button>
                    </TopHeaderBox>
                    <RightContents>
                        {Projects()}
                        {Contact()}
                    </RightContents>
                </Right>
                <Left>
                    <Index>
                        <IndexContent color={'#999'}>
                            <span>contents</span>
                        </IndexContent>
                        <IndexContent color={'#555'}>
                            <span>contents</span>
                        </IndexContent>
                        <IndexContent color={'#333'}>
                            <span>contents</span>
                        </IndexContent>
                        <IndexContent color={'#444'}>
                            <span>contents</span>
                        </IndexContent>
                        <IndexContent color={'#999'}>
                            <span>contents</span>
                        </IndexContent>
                        <IndexContent color={'#666'}>
                            <span>contents</span>
                        </IndexContent>
                        <IndexContent color={'#888'}>
                            <span>contents</span>
                        </IndexContent>
                        <IndexContent color={'#555'}>
                            <span>contents</span>
                        </IndexContent>
                        <IndexContent color={'#333'}>
                            <span>contents</span>
                        </IndexContent>
                        <IndexContent color={'#777'}>
                            <span>contents</span>
                        </IndexContent>
                    </Index>
                    <Menu>
                        <button style={{backgroundColor: "#ffff22"}}>
                            About Me
                        </button>
                        <button style={{backgroundColor: "hotpink"}}>
                            Contact
                        </button>
                    </Menu>
                </Left>
            </div>
        )
    }
}
export default App;
